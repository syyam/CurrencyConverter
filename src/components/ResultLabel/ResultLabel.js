import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles'
import PropTypes from "prop-types";


const ResultLabel = ({ label, currency }) => {
    return (
        <View style={styles.Container}>
            <Text numberOfLines={1}
                adjustsFontSizeToFit testID={'text'} style={styles.labelText}>{label ? label : '0'}</Text>
            <Text testID={'text'} style={styles.currText}>{currency}</Text>
        </View>
    );
};

ResultLabel.propTypes = {
    label: PropTypes.string,
    currency: PropTypes.string
};
export default ResultLabel;