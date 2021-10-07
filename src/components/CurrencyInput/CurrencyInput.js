import React from 'react';
import { View, TouchableOpacity, TextInput, Text } from "react-native";

import PropTypes from "prop-types";

import styles from "./styles";

const CurrencyInput = ({ label, value, onInputChange }) => {
    
    return (
        <View style={styles.container}> 
            <TextInput
                testID={'currency-input'}
                style={styles.textInput}
                keyboardType="numeric"
                placeholder = "Enter Amount in SEK"
                value={value}
                onChangeText={(text) => { onInputChange(text) }}
            />
        </View>
    )
}
CurrencyInput.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onInputChange: PropTypes.func,
};

export default CurrencyInput;