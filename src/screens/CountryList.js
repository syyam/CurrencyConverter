import React, { Component } from 'react';

import { View, FlatList, Text, StatusBar, Alert, awa } from 'react-native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import { CurrencyItem } from '../components/CurrencyItem'
import { Loading } from '../components/Loading'
import { Container } from '../components/Container'
import { CountryHeader } from '../components/CountryHeader'


import { getCountriesList, getCapital, getCurrencyNames, setTempCountryArr, updateCountryMap, getPopulation } from '../redux/actions/Country';
import styles from '../components/Container/styles';
import { CurrencyInput } from '../components/CurrencyInput';


class CountryList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            capitals: [],
            currencyNames: [],
            isLoading: true,
            countryMap: {},
            allData: {},
            alertShow: false,
            selectedCountry: ''
        }

    }

    getAllData() {
        const countryMap = {}

        const { capitals, currencyNames } = this.props.allData?.country

        const currencyMap = {}


        // Making a new object from 3 data souces and submerging into one object with reference to the country. As country object is same in all 3 of the apis
        currencyNames?.data?.map((currObj) => {
            currencyMap[currObj.name] = { currency: currObj.currency }
        })

        capitals?.data?.map(({ name, capital }) => {
            if (!countryMap[name]) {
                countryMap[name] = { countryName: name, capital, currencyName: currencyMap[name].currency }
            }
        })

        this.props.updateCountryMap(countryMap)
        this.props.setTempCountryArr(countryMap)



        return countryMap
    }

    componentDidUpdate(prevProps, previousState) {


        // As componentDidUpdate executes in re-render phase, we will have to compare prevProps and newProps to abstain from infinite re renders.

        if (prevProps.capitals?.length !== this.props.capitals?.length) {
            this.setState({
                capitals: this.props.capitals,


            })
        }


        if (prevProps.currencyNames?.length !== this.props.currencyNames?.length) {
            this.setState({
                currencyNames: this.props.currencyNames,


            })
        }

        if (prevProps.capitals?.length > 0 && this.props.capitals?.length > 0 && this.props.currencyNames?.length > 0 && prevProps.currencyNames?.length > 0) {
            const data = this.props.countryMap
            if (Object.keys(data).length === 0) {
                this.getAllData()
                this.setState({
                    isLoading: false
                })



            }


            if (prevProps.countryMap != this.props.countryMap) {

                this.setState({
                    allData: data,

                })
            }
        }
    }

    componentDidMount() {
        // reseting
        if (Object.keys(this.props?.countryMap).length > Object.keys(this.props?.tempArray).length && Object.keys(this.props?.countryMap).length != 0) {

            this.props.setTempCountryArr(this.props.countryMap)
        }

        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            // this.props.getCountriesList()
            const passedParams = this.props.route.params
            const { amount } = passedParams



            const { capitals, currencyNames, allData } = this.props
            if (capitals.length === 0 && currencyNames.length === 0) {
                this.props.getCapital()
                this.props.getCurrencyNames()
                this.getAllData()

            }
            else {

                this.setState({

                    currencyNames: this.props.currencyNames,
                    capitals: this.props.capitals,
                    isLoading: false

                })
            }


        })


    }
    showAlert = (type, info) =>
        Alert.alert(
            type,
            info,
        );

    // pressHandlerPopulation = () => {
    //     // deep copy



    // }


    // converting object of data to array to feed it to the flatlist
    getArrayFromObject = (map) => {
        // deep copy
        const obj = { ...map }

        return Object.keys(obj).map((item) => {
            return { countryName: item, capital: obj[item].capital, currencyName: obj[item].currencyName }
        })

    }

    onSearchInputChange = (val) => {
        const countryArr = this.getArrayFromObject(this.props.countryMap)

        const tempObj = {}
        const updatedArr = countryArr.filter((item) => item.countryName.toLowerCase().includes(val.toLowerCase()))

        updatedArr.map((item => {
            tempObj[item.countryName] = { countryName: item.countryName, capital: item.capital, currencyName: item.currencyName }
        }))
        this.props.setTempCountryArr(tempObj)

    }
    render() {

        return (
            <View style={{
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <CurrencyInput keyboardType="default"
                    placeholderValue="Search" onInputChange={this.onSearchInputChange} />
                <FlatList
                    data={this.getArrayFromObject(this.props.tempArray)}
                    style={{ width: "100%" }}
                    ListHeaderComponent={<CountryHeader />}
                    renderItem={({ item, index }) => {


                        return (
                            <CurrencyItem

                                country={item.countryName}
                                capital={item.capital}
                                currency={item.currencyName}
                                backgroundColor={index % 2 == 1 ? "#F0FBFC" : "white"}
                                pressHandler={() => {
                                    this.props.navigation.navigate('Home', {
                                        selectedCurrency: item.currencyName,

                                    })
                                }}
                                pressHandlerPopulation={() => {
                                    this.props.getPopulation(item.countryName)
                                    this.setState({
                                        selectedCountry: item.countryName,


                                    })

                                    if (this.props.population != '')
                                        this.showAlert(item.countryName, this.props.population + "")

                                }}


                            />

                        )
                    }}
                    keyExtractor={(item, index) => index.toString()}
                />
                {this.state.isLoading && <Loading style={styles.Container} />}
            </View>
        )

    }
}
const mapStateToProps = (state) => {


    const props = {
        allData: state,
        // currencies: state?.currency.currencies.rates ? Object.keys(state?.currency.currencies.rates) : [],
        capitals: state?.country.capitals?.data || state?.country?.capitals,
        countryMap: state?.country.countryMap,
        currencyNames: state?.country.currencyNames?.data || state?.country?.currencyNames,
        population: state?.country.population?.body?.population || state?.country?.population,
        tempArray: state?.country.tempData,
        isLoading: state?.country.isLoading

    }

    console.log(state?.country.isLoading)

    return props;
}
const mapDispatchToProps = {
    // getCountriesList
    getCapital,
    getCurrencyNames,
    getPopulation,
    updateCountryMap,
    setTempCountryArr
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CountryList);
