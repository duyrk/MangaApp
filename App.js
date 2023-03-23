/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AppButton from './Source/Components/AppButton';
import AppInputField from './Source/Components/AppInputField';
import ComponentTest from './Source/ComponentTest';
import { AppColors } from './Source/Constants/AppColors';
import { Typographies } from './Source/Constants/Typographies';
import SignIn from './Source/Pages/LoginPages/SignIn';
import SignUp from './Source/Pages/LoginPages/SignUp';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App  = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex:1
  };
  
  return (
    <View style={backgroundStyle}>
      {/* <ComponentTest></ComponentTest> */}
      {/* <SignIn></SignIn> */}
      <SignUp></SignUp>
      {/* <View style={{flex:1}}>
        <View style={{backgroundColor:'red', flex:3}}></View>
        <View style={{backgroundColor:'pink', flex:2}}></View>
      </View> */}
    <StatusBar  barStyle={'dark-content'} backgroundColor={"#FFF"}></StatusBar>
    </View>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
