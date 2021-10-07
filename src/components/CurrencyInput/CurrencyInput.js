import React from 'react';
import { View, TouchableOpacity, TextInput, Text } from "react-native";

import PropTypes from "prop-types";

import styles from "./styles";

const CurrencyInput = ({ label, value, placeholderValue, onInputChange, keyboardType }) => {
    
    return (
        <View style={styles.container}> 
            <TextInput
                testID={'currency-input'}
                style={styles.textInput}
                keyboardType={keyboardType}
                placeholder = {placeholderValue}
                value={value}
                onChangeText={(text) => { onInputChange(text) }}
            />
        </View>
    )
}
CurrencyInput.propTypes = {
    label: PropTypes.string,
    placeholderValue: PropTypes.string,
    keyboardType: PropTypes.string,

    value: PropTypes.string,
    onInputChange: PropTypes.func,
};

export default CurrencyInput;