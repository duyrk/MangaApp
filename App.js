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
import { AppColors } from './Source/Constants/AppColors';
import { Typographies } from './Source/Constants/Typographies';

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
  };
  const [handleInput, sethandleInput] = useState('')
  return (
    <SafeAreaView style={backgroundStyle}>
     <Text style={Typographies.h1}>H1</Text>
     <Text style={Typographies.h2}>H1</Text>
     <Text style={Typographies.h3}>H1</Text>
     <Text style={Typographies.h4}>H1</Text>
     <Text style={Typographies.h5}>H1</Text>
     <Text style={Typographies.h6}>H1</Text>
     <AppButton value="Normal" type='normal' onPress={()=>{console.log(handleInput)}} ></AppButton>
     <AppButton value="Active" type='active' onPress={()=>{console.log('alo')}} ></AppButton>
     <AppButton value="Disabled" type='disabled' onPress={()=>{console.log('alo')}} ></AppButton>
    <AppInputField type='text' value='alo' onChangeText={sethandleInput} inputColor={AppColors.secondary_gray}></AppInputField>
    <AppInputField type='password' value='alo' onChangeText={sethandleInput} inputColor={AppColors.secondary_gray}></AppInputField>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
