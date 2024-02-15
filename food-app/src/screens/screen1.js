import React from "react";
import { ImageBackground, View } from "react-native/types";


const page_bg = require('../assets/page_bg/page1.png')

const screen1 = () => {
    return(
        <ImageBackground
            source={page_bg}
            resizeMode="cover"
            style={styles.image}
        >


        </ImageBackground>
    )
}

export default screen1;