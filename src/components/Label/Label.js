import React from 'react';
import { Text } from 'react-native';
import styles from './styles'
import PropTypes from "prop-types";


const Label = ({ label }) => <Text testID={'text'} style={styles.labelText}>{label}</Text>

Label.propTypes = {
    label: PropTypes.string,
};
export default Label;