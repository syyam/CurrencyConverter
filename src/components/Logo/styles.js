import { Dimensions } from 'react-native';
import EStyleSheet from "react-native-extended-stylesheet";

const { width } = Dimensions.get('window');

const imageSize = width / 2;
const imageResize = width / 2
export default EStyleSheet.create({

});

export const styles = (isKeyboardOpen = false) => EStyleSheet.create({
    container: {
        alignItems: 'center',
    },
    containerImage: {

        height: isKeyboardOpen ? imageResize : imageSize,
        width: isKeyboardOpen ? imageResize : imageSize
    },
    innerImage: {
        width: isKeyboardOpen ? imageResize / 2 : imageSize / 2
    },
    logoText: {
        fontSize: 22,
        fontStyle: "italic",
        color: "$white"
    }
})