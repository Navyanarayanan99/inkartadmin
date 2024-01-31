import React from 'react'
import { View, Image } from 'react-native'
const Splash=()=>{
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Image
        source={require('../../assets/images/splash.jpg')}
        style={{
          width: '100%',
          height: 150,
          resizeMode: 'contain',
          alignSelf:'center'
        }}
      />
    </View>
  )
}
export default Splash;