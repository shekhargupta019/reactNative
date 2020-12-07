
import React from 'react';
import {View, Text, Button} from 'react-native';

const Login = () => {

    function login(){
        alert('U tired to login');
    }
  return (
    <>
      <View>
        <Button onPress={login} />
      </View>
    </>
  );
};

export default Login;
