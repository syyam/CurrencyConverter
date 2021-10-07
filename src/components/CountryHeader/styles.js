import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
    tableHeader: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: '$primary',
        height: 50
      },

    columnHeader: {
        width: "20%",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        
    },
    columnHeaderTxt: {
        color: "white",
        fontWeight: "bold",
    },
});

