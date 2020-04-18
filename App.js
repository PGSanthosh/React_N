/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App : () => React$Node = () => {
  return (
    <React.Fragment>
    <View style={styles.container}>
      <Image
      source={require("./assets/images/home.png")}
      
      style={StyleSheet.image}
      />
      <Text>Hello</Text>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create ({
container:{
alignItems:"center",
flex:1
},
image:{
  width:50,
  height:50
}
})

export default App;
