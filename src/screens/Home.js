import React, { useEffect, useState, Component } from 'react';
import { StatusBar, KeyboardAvoidingView, Keyboard, Alert } from 'react-native';
import { connect } from 'react-redux';

import { Container } from '../components/Container'
import { Logo } from '../components/Logo';
import { CurrencyInput } from '../components/CurrencyInput';
import { CurrencyButton } from '../components/CurrencyButton';

import { getCurrenciesList } from '../redux/actions/Currency';
import { Text } from 'react-native';
import { ResultLabel } from '../components/ResultLabel';

class Home extends Component {
    constructor(props) {
        super(props)
        this.keyboardDidShowListener = Keyboard.addListener(
            "keyboardDidShow",
            this.keyboardDidShow
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            this.keyboardDidHide
        );
        this.state = {
            baseValue: '',
            quoteValue: '',
            baselabel: 'SEK',
            quoteLabel: 'GBP',
            isKeyboardOpen: false,
            alertShow: false,
            errMsg: ''
        }
    }

    componentDidMount() {
        this._unsubscribe = this.props.navigation.addListener('focus', () => {

            // passedParams will get value from CountryList (i.e after selecting a country and coming back to this screen)
            const passedParams = this.props.route.params
            if (passedParams) {
                const { selectedCurrency } = passedParams

                const { currencies, errorMsg } = this.props;
                const data = currencies.currencies;
                const { rates } = data
                if (rates === undefined) {
                    console.log("Undefined Error")
                    this.showAlert("Error", "Couldn't find Resultss")
                }
                else {
                    const qouteRate = rates[String(selectedCurrency)]

                    this.setState({ quoteLabel: selectedCurrency, quoteValue: qouteRate, alertShow: false })

                }


            }
        });
        this.props.getCurrenciesList(this.state.baselabel)
    }
    showAlert = (type, info) =>
            Alert.alert(
                type,
                info,
            );
    componentDidUpdate(prevProps, previousState) {
        const { currencies, errorMsg } = this.props;
        
        if (this.props?.currencies != null) {

            if (prevProps?.currencies != this.props.currencies) {


                if (currencies.currencies?.success == true) {
                    const data = currencies.currencies;

                    const { rates } = data
                    const quoteLabel = String(this.state.quoteLabel)
                    const qouteRate = rates[quoteLabel]

                    this.setState({
                        quoteValue: Number(qouteRate),
                        alertShow: false
                    })





                }
                else {
                    // console.log(currencies.currencies?.error.info)
                    this.setState({ alertShow: true });

                    this.showAlert(currencies.currencies?.error.type, currencies.currencies?.error.info)

                }

            }

        }

    }
    keyboardDidShow = (e) => {
        this.setState({ isKeyboardOpen: true });

    }
    keyboardDidHide = () => {
        this.setState({ isKeyboardOpen: false });

    }

    onButtonPress = () => {
        this.props.navigation.navigate("CountryList", {
            title: "Countries",
            amount: this.state.baseValue,
            calledFor: 'quoteCurrency'
        })
    }

    onBaseInputChnage = (val) => {
        this.setState({ baseValue: val })
    }


    onQuoteInputChnage = (val) => {
        this.setState({ quoteValue: val })
    }
    componentWillUnmount() {
        this._unsubscribe()
        this.keyboardDidShowListener.remove()
        this.keyboardDidHideListener.remove()
    }


    render() {

        const { baseValue, quoteValue, baselabel, quoteLabel } = this.state;
        const { navigation, getCurrenciesList } = this.props;


        return (
            <Container >
                <StatusBar translucent={false} barStyle="light-content" />
                <KeyboardAvoidingView
                    behavior="position"
                    style={{ flex: 1, justifyContent: 'center' }}
                    keyboardVerticalOffset={(-6 * 64) / 2.0}
                >
                    <Logo
                        isKeyboardOpen={this.state.isKeyboardOpen} />
                    <CurrencyInput
                        onCurrencySelect={() => {
                            navigation.navigate("CountryList", {
                                title: "Base Currency",
                                calledFor: 'baseCurrency'

                            })
                        }}

                        value={baseValue}
                        onInputChange={this.onBaseInputChnage}
                    />

                    <ResultLabel currency={quoteLabel}
                        //  From the API we are getting base EURO exchange rates for all other countries
                        //  lets assume you want to convert 20 USD to any other country currency (target currency)

                        // 1 eur = 10.14 sek

                        // 1 sek= 0.0987 EUROS ( 1 / 10.14 )
                        // 20 sek * 0.0987 eur= 1.972 EUROS 
                        label={baseValue ? parseFloat((quoteValue * 0.0987) * baseValue).toFixed(2) : ''} />


                    <CurrencyButton
                        onButtonPress={
                            this.onButtonPress}
                        text="Change Currency"
                    />

                </KeyboardAvoidingView>


            </Container>
        )
    }
}


const mapStateToProps = (state) => {
    const props = {
        currencies: state?.currency,
        errorMsg: state?.errorMsg
    }
    return props;
}
const mapDispatchToProps = {
    getCurrenciesList
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);



