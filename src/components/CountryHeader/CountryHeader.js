import React from 'react';
import { View } from 'react-native';
import styles from './styles'
import PropTypes from "prop-types";

import Icon from 'react-native-vector-icons/Ionicons';

import { CardPanel } from '../CardPanel';
import { Label } from '../Label';

const CountryHeader = () => {
    return (
        <View style={styles.tableHeader} >
            <Label Text={styles.columnHeader} label="Country" />
            <Label Text={styles.columnHeader} label="Capital" />
            <Label Text={styles.columnHeader} label="Currency" />
            <Label Text={styles.columnHeader} label="Population" />
        </View>
    );
};

export default CountryHeader;