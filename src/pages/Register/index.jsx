import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, Image, StyleSheet, Button} from 'react-native';
import logo from '../../assets/Logo.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import registerAction from '../../redux/actions/register';
import {useDispatch, useSelector} from 'react-redux';
// import {useNavigation} from '@react-navigation/native';

const Register = ({navigation}) => {
  // const navigation = useNavigation();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    type: 'user',
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = async () => {
    try {
      dispatch(registerAction(form, navigation));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={style.container}>
      <View style={style.Text}>
        <Image source={logo} style={style.logo} />
        <Text style={style.headerText}>Welcome !</Text>
        <Text>Register To Recipe App</Text>
      </View>
      <View>
        <View style={style.TextInput}>
          <Ionicons
            name="person-outline"
            size={30}
            color="rgba(239, 200, 26, 1)"
            // onChangeText={text => setForm({...form, email: text})}
          />
          <TextInput
            style={style.textForm}
            placeholder="Name"
            placeholderTextColor="rgba(239, 200, 26, 1)"
            onChangeText={text => setForm({...form, name: text})}
            value={form.name}
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
            placeholder="Email"
            placeholderTextColor="rgba(239, 200, 26, 1)"
            onChangeText={text => setForm({...form, email: text})}
            value={form.email}
          />
        </View>
      </View>
      <View>
        <View style={style.TextInput}>
          <Ionicons
            name="lock-closed-outline"
            size={30}
            color="rgba(239, 200, 26, 1)"
          />
          <TextInput
            style={style.textForm}
            placeholder="Password"
            onChangeText={text => setForm({...form, password: text})}
            value={form.password}
            placeholderTextColor="rgba(239, 200, 26, 1)"
            keyboardType="number-pad"
            secureTextEntry={true}
            autoCorrect={false}
            returnKeyType="go"
          />
        </View>
      </View>

      <View style={style.button}>
        <Button
          title="Register"
          color="rgba(239, 200, 26, 1)"
          onPress={handleSubmit}
        />
      </View>
      <View style={style.regis}>
        <Text style={style.textAccount}>Have an account?</Text>
        <Text
          style={style.textSign}
          onPress={() => navigation.navigate('login')}>
          Log In
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
    color: 'black'
  }
});

export default Register;
