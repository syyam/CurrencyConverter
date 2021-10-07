import React from "react";
import { View, Image, Text, ImageBackground } from "react-native";
import Images from "../../assets/images";

import { styles } from "./styles";

const Logo = ({ isKeyboardOpen }) => (
    <View style={styles(isKeyboardOpen).container}>
        <Image resizeMode="contain" style={styles(isKeyboardOpen).containerImage} source={Images.logo} />
    </View>
);

export default Logo;
