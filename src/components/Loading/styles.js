import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({

    loadingStyle: {
        position: 'absolute',
        flexDirection: 'column',
        top: 0,
        marginTop: 40,
        justifyContent: 'space-between',
        alignItems: "center",
        backgroundColor: '$primary',
        paddingLeft: '5%',
        paddingRight: '5%',
        height: '100%',
        width: '100%'
    }

});

export default styles;
