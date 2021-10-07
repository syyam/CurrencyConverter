import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles'
import PropTypes from "prop-types";


const Label = ({ label }) => {
    return (
        <View style={styles.labelText}>
            <Text testID={'text'}>{label}</Text>

        </View>
    );
};


Label.propTypes = {
    label: PropTypes.string,
};
export default Label;