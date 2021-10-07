import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
    SafeArea: {
        flex: 1
    },
    Container: {
        position: 'absolute',
        flexDirection: 'column',
        top: 0,
        justifyContent: 'space-between',
        alignItems: "center",
        backgroundColor: '$primary',
        paddingLeft: '5%',
        paddingRight: '5%',
        height: '100%',
        width: '100%'
    }
});
