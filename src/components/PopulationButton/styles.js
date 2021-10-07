import { StyleSheet, Dimensions } from 'react-native'


export default StyleSheet.create({
    SafeArea: {
        flex: 1,
    },
    container: {
        alignItems: 'center',
        marginVertical: 10
    },
    btnContainerStyle: {
        width:30,

        backgroundColor: '#2D52E5',
        paddingVertical: 10,
        alignItems: "center",
        borderRadius: 25
    },
    btnTextStyle: {
        color: '#ffff',
        fontSize: 14,
        textTransform: 'uppercase',
        textAlign: 'center',
        fontFamily: 'Quicksand-Medium'
    }
});
