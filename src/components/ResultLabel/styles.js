import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
    },
    labelText: {
        fontSize: 120,
        fontWeight: "600",
        fontFamily: "Roboto-Medium",
        "@media android": {
            fontFamily: "Roboto-Medium",
        },
        color: '$white'
    },

    
    currText: {
        fontSize: 20,
        fontWeight: "300",
        fontFamily: "Roboto-Medium",
        "@media android": {
            fontFamily: "Roboto-Medium",
        },
        
        color: '$white'
    },

});

export default styles;
