import React from "react";
import { View,Text, ScrollView, Image } from "react-native"; 


const LogIn = () => {
    return (
        <View>
            <Image source={require('../src/assets/images/user.png')}
            style={{  width:"100%",
            height:"30%",}} />
            <ScrollView>
            <Text>LogIn</Text>
            </ScrollView>
        </View>
    );
};
export default LogIn;