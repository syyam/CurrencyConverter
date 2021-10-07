import React from 'react';
import { View, TouchableOpacity, Text } from "react-native";

import PropTypes from "prop-types";

import styles from "./styles";

const PopulationButton = ({ pressHandlerPopulation }) => {
    
    return (
        <TouchableOpacity style={styles.labelText} onPress={() => { pressHandlerPopulation() }} >
            <Text style={styles.textLabel}>Get Results</Text>

        </TouchableOpacity>
    )
}
PopulationButton.propTypes = {
    pressHandlerPopulation: PropTypes.func,
    
};

export default PopulationButton;