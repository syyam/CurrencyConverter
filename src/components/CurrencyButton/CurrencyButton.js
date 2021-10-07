import React from 'react';
import { View, TouchableOpacity, Text } from "react-native";

import PropTypes from "prop-types";

import styles from "./styles";

const CurrencyButton = ({ onButtonPress, text }) => {
    
    return (
        <TouchableOpacity style={styles.container} testID={'currency-select'} onPress={() => {onButtonPress()}}>
            <View style={styles.btnContainerStyle}>
                <Text style={styles.btnTextStyle}> {text} </Text>
            </View>
        </TouchableOpacity>
    )
}
CurrencyButton.propTypes = {
    onButtonPress: PropTypes.func,
    text: PropTypes.string,
};

export default CurrencyButton;