/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { removeTypeDuplicates } from '@babel/types';

const App: () => Node = () => {
  return (
    <View>
      <StatusBar barStyle='#222' />
      <ScrollView>
        <Text style={styles.TitolRoig} selectable={true}>Benvinguts a React Native</Text>
        <Text style={styles.Segon} selectable={true}>Este serà el primer exercici que fem.</Text>
        <Text style={{fontFamily: 'normal'}}selectable={true}>Normal</Text>
        <Text style={{fontFamily: 'notoserif'}}selectable={true}>notoserif</Text>
        <Text style={{fontFamily: 'sans-serif'}}selectable={true}>sans-serif</Text>
        <Text style={{fontFamily: 'sans-serif-light'}}selectable={true}>sans-serif-light</Text>
        <Text style={{fontFamily: 'sans-serif-thin'}}selectable={true}>sans-serif-thin</Text>
        <Text style={{fontFamily: 'sans-serif-condensed'}}selectable={true}>sans-serif-condensed</Text>
        <Text style={{fontFamily: 'sans-serif-medium'}}selectable={true}>sans-serif-medium</Text>
        <Text style={{fontFamily: 'serif'}}selectable={true}>serif</Text>
        <Text style={{fontFamily: 'Roboto'}}selectable={true}>roboto</Text>
        <Text style={{fontFamily: 'monspace'}}selectable={true}>monspace</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  TitolRoig: {
    fontSize: 40,
    fontWeight: "bold",
    color: 'red',
    textAlign: 'center',
  },
  Segon: {
    fontSize: 20,
    fontFamily: 'Roboto',
    color: 'blue',
    fontWeight: "bold",
  }
});

export default App;
