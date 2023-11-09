import React, {useEffect, useState} from 'react';
import {Text, View, TextInput, Image, StyleSheet, Button} from 'react-native';
import logo from '../../assets/Logo.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import loginAction from '../../redux/actions/login';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.authLoginReducers);
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    const result = async () => {
      if (isLogin === false) {
        console.log('loginnya error');
      } else if (isLogin === true) {
        dispatch(loginAction(form));
        navigation.navigate('MyApp');
      }
    };
    result();
  }, [isLogin]);

  return (
    <View style={style.container}>
      <View style={style.Text}>
        <Image source={logo} style={style.logo} />
        <Text style={style.headerText}>Welcome !</Text>
        <Text>Log in to your exiting account.</Text>
      </View>
      <View>
        <View style={style.TextInput}>
          <Ionicons
            name="person-outline"
            size={30}
            color="rgba(239, 200, 26, 1)"
          />
          <TextInput
            style={style.textForm}
            placeholder="Email"
            placeholderTextColor="rgba(239, 200, 26, 1)"
            onChangeText={text => setForm({...form, email: text})}
            value={form.email}
            name="email"
          />
        </View>
      </View>
      <View>
        <View style={style.TextInput}>
          <Ionicons
            name="person-outline"
            size={30}
            color="rgba(239, 200, 26, 1)"
          />
          <TextInput
            style={style.textForm}
            placeholder="password"
            placeholderTextColor="rgba(239, 200, 26, 1)"
            secureTextEntry={true}
            onChangeText={text => setForm({...form, password: text})}
            value={form.password}
            name="password"
          />
        </View>
      </View>
      <View style={style.forgot}>
        <Text>Forgot Password?</Text>
      </View>
      <View style={style.button}>
        <Button
          title="Login"
          color="rgba(239, 200, 26, 1)"
          onPress={async () => {
            dispatch(loginAction(form, navigation));
          }}
        />
      </View>
      <View style={style.regis}>
        <Text style={style.textAccount}>Dont Have an account?</Text>
        <Text
          style={style.textSign}
          onPress={() => navigation.navigate('register')}>
          Sign In
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    marginTop: 30,
    // alignItems: 'center',
  },

  Text: {
    marginTop: 30,
    alignItems: 'center',
    marginBottom: 60,
  },

  headerText: {
    color: 'rgba(239, 200, 26, 1)',
    fontSize: 20,
    marginHorizontal: 50,
    fontWeight: 'bold',
    marginTop: 30,
  },

  TextInput: {
    marginBottom: 40,
    borderColor: 'rgba(239, 200, 26, 1)',
    backgroundColor: 'rgba(245, 245, 245, 1)',
    borderRadius: 15,
    height: 70,
    borderWidth: 2,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    width: 400,
    flexDirection: 'row',
    alignItems: 'center',
  },

  forgot: {
    color: 'rgba(153, 153, 153, 1)',
    fontSize: 12,
    fontWeight: 'bold',
    alignItems: 'flex-end',
    marginHorizontal: 10,
    marginBottom: 20,
  },

  button: {
    width: 400,
    marginHorizontal: 10,
    borderRadius: 15,
    // height: 50
  },

  regis: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },

  textAccount: {
    color: 'rgba(153, 153, 153, 1)',
    fontSize: 17,
  },

  textSign: {
    color: 'rgba(239, 200, 26, 1)',
    fontSize: 17,
    marginHorizontal: 5,
  },

  textForm: {
    color: 'black',
  },
});

export default Login;
