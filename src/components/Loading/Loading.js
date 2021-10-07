import React from 'react';
import styles from './styles'
import PropTypes from "prop-types";
import { View, ActivityIndicator } from 'react-native';




const Loading = () => <View
    style={styles.loadingStyle}>
    <ActivityIndicator size={25} color={'$primary'}/>
</View>

Loading.propTypes = {
    label: PropTypes.string,
};
export default Loading;