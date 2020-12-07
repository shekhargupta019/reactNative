/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, Button} from 'react-native';
import Login from './components/Login';

const App = () => {

  function login(){
    alert('U tired to login');
}
  return (
    <>
      <View>
        <Text style={{fontSize:60}}>Hello Shekhar</Text>
        {/* <Login /> */}
        <Button title='Login' onPress={login} />
      </View>
    </>
  );
};

export default App;
