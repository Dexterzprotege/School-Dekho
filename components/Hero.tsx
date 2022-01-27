import React from "react";
import { Text, Image } from "react-native";
const Hero = () => {
    return (
        <React.Fragment>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Find Schools Near You! {"\n"} </Text>
            <Image source={require('../assets/homeicon.png')} />
        </React.Fragment>
    );
}

export default Hero;