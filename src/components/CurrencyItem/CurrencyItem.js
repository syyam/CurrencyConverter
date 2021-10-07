import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'
import PropTypes from "prop-types";

import Icon from 'react-native-vector-icons/Ionicons';

import { CardPanel } from '../../components/CardPanel';
import { Label } from '../../components/Label';
import { PopulationButton } from '../../components/PopulationButton'

const CurrencyItem = ({ country, capital, currency, backgroundColor, pressHandler }) => {
    return (
        <CardPanel backgroundColor={backgroundColor} pressHandler={pressHandler}>
            <Label styles={{ ...styles.columnRowTxt, fontWeight: "bold", color: 'black' }} label={country} />
            <Label styles={styles.columnRowTxt} label={capital} />
            <Label styles={styles.columnRowTxt} label={currency} />
            <TouchableOpacity styles={styles.columnRowTxtPopulation}><Text>Population</Text></TouchableOpacity>

        </CardPanel>
    );
};
CurrencyItem.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    backgroundColor: PropTypes.string,
    pressHandler: PropTypes.func,
};
export default CurrencyItem;