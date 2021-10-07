import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import styles from './styles'
import PropTypes from "prop-types";


const CardPanel = ({ pressHandler, children, backgroundColor }) => {
    return (
        <TouchableOpacity testID={'submit'} style={{...styles.container, backgroundColor: backgroundColor}} onPress={() => { pressHandler() }}>
            {children}
        </TouchableOpacity >
    );
}
CardPanel.propTypes = {
    pressHandler: PropTypes.func,
    children: PropTypes.any
};
export default CardPanel;