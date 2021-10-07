import { StyleSheet, Dimensions } from 'react-native'


export default StyleSheet.create({
    SafeArea: {
        flex: 1,
    },
    container: {
        alignItems: 'center',
        width: '100%',
        marginVertical: 10
    },
    btnContainerStyle: {
        marginVertical: 10,
        backgroundColor: '#2D52E5',
        paddingVertical: 10,
        alignItems: "center",
        width: '60%',
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
