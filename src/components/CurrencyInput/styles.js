import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: '$white',
        width: '100%',
        borderRadius: 25,
        marginVertical: 10
    },
    label: {
        color: '$primary',
        fontSize: 17,
        fontStyle: "normal",
    },
    textInput: {
        width: '80%',
        paddingHorizontal: 20
    }
});
