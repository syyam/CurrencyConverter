import React from 'react';
import styles from './styles'
import PropTypes from "prop-types";


import { CardPanel } from '../../components/CardPanel';
import { Label } from '../../components/Label';
import { PopulationButton } from '../../components/PopulationButton'
import { CurrencyButton } from '../CurrencyButton';

const CurrencyItem = ({ country, capital, currency, backgroundColor, pressHandler, pressHandlerPopulation }) => {
    return (
        <CardPanel backgroundColor={backgroundColor} pressHandler={pressHandler}>
            <Label styles={{ ...styles.columnRowTxt, fontWeight: "bold", color: 'black' }} label={country} />
            <Label styles={styles.columnRowTxt} label={capital} />
            <Label styles={styles.columnRowTxt} label={currency} />
           
            <PopulationButton pressHandlerPopulation={pressHandlerPopulation} styles={styles.columnRowTxt} />
           

            {/* <Icon  styles={styles.columnBtn} onPress={() => { console.log("aaaaaa") }}/> */}
        </CardPanel>
    );
};
CurrencyItem.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    backgroundColor: PropTypes.string,
    pressHandler: PropTypes.func,
    pressHandlerPopulation: PropTypes.func,

};
export default CurrencyItem;