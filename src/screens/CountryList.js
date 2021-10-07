import React, { Component } from 'react';

import { View, FlatList, Text, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import { CurrencyItem } from '../components/CurrencyItem'
import { Loading } from '../components/Loading'
import { Container } from '../components/Container'
import { CountryHeader } from '../components/CountryHeader'


import { getCountriesList, getCapital, getCurrencyNames, updateCountryMap, getPopulation } from '../redux/actions/Country';
import styles from '../components/Container/styles';


class CountryList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            capitals: [],
            currencyNames: [],
            isLoading: true,
            countryMap: {}
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

        

        return countryMap
    }

    componentDidUpdate(prevProps, previousState) {

        if (prevProps.capitals.length !== this.props.capitals.length) {
            this.setState({
                capitals: this.props.capitals,
              

            })
        }


        if (prevProps.currencyNames.length !== this.props.currencyNames.length) {
            this.setState({
                currencyNames: this.props.currencyNames,
               

            })
        }

        if (prevProps.capitals.length > 0 && this.props.capitals.length > 0 && this.props.currencyNames.length > 0 && prevProps.currencyNames.length > 0) {
            const data = this.props.countryMap
            if (Object.keys(data).length === 0) {
                this.getAllData()
                this.setState({
                    isLoading: false
                })
            }


        }
    }

    componentDidMount() {

        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            // this.props.getCountriesList()
            const passedParams = this.props.route.params
            const { amount } = passedParams



            const { capitals, currencyNames, allData } = this.props
            if (capitals.length === 0 && currencyNames.length === 0) {
                this.props.getCapital()
                this.props.getCurrencyNames()
                this.props.getPopulation()
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



    // converting object of data to array to feed it to the flatlist
    getArrayFromObject = () => {
        // depp copy
        const obj = { ...this.props.countryMap }
        return Object.keys(obj).map((item) => {
            return { countryName: item, capital: obj[item].capital, currencyName: obj[item].currencyName }
        })

    }

    render() {

        return (
            <View style={{
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                {/* <CountryHeader/> */}
                <FlatList
                    data={this.getArrayFromObject()}
                    style={{ width: "100%" }}
                    ListHeaderComponent={<CountryHeader />}
                    renderItem={({ item, index }) => (


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


                        />

                    )}
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
        currencyNames: state?.country.currencyNames.data || state?.country?.currencyNames,
        population: state?.country.population?.data || state?.country?.population,

    }


    return props;
}
const mapDispatchToProps = {
    // getCountriesList
    getCapital,
    getCurrencyNames,
    getPopulation,
    updateCountryMap
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CountryList);
