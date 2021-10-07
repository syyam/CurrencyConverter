import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    View,
    TouchableWithoutFeedback,
    Keyboard,
    SafeAreaView
} from "react-native";
import styles from "./styles";

class Container extends Component {
    static propTypes = {
        children: PropTypes.any,
        isSafeAreaEnabled: PropTypes.bool,
        direction: PropTypes.string,
        backgroundColor: PropTypes.string
    };
    containerView() {
        const { children } = this.props;
        const conatinerStyle = [styles.Container]
        
        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={conatinerStyle}>{children}</View>
            </TouchableWithoutFeedback >
        );
    }
    render() {
        const { isSafeAreaEnabled } = this.props;
        if (isSafeAreaEnabled) {
            return (
                <SafeAreaView style={styles.SafeArea}>
                    {this.containerView()}
                </SafeAreaView>
            );
        } else {
            return this.containerView();
        }
    }
}
export default Container;
