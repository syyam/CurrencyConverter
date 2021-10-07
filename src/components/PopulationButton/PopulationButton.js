import React from 'react';
import { View, TouchableOpacity, Text } from "react-native";

import PropTypes from "prop-types";

import styles from "./styles";

const PopulationButton = ({ onButtonPress, text }) => {
    
    return (
        <TouchableOpacity style={styles.container} testID={'population-select'} onPress={() => {onButtonPress()}}>
            <View style={styles.btnContainerStyle}>
                <Text style={styles.btnTextStyle}> {text} </Text>
            </View>
        </TouchableOpacity>
    )
}
PopulationButton.propTypes = {
    onButtonPress: PropTypes.func,
    text: PropTypes.string,
};

export default PopulationButton;