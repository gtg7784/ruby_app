import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  Pressable,
  Text,
  Dimensions,
  View,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import axios from 'axios';

import {logo, mainIllust, avatar, password} from '../constants/image';
import Container from '../components/Container';
import Input from '../components/Input';
import Button from '../components/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fdfdfd',
  },
  logoImage: {
    marginTop: 20,
    width: 63,
    height: 24,
  },
  illustImage: {
    marginTop: 46,
    width: 249,
    height: 273,
    marginBottom: 2,
  },
  input: {
    marginTop: 32,
  },
  button: {
    marginVertical: 18,
    backgroundColor: '#ff4f8a',
  },
  forgetView: {
    width: Dimensions.get('window').width - 40,
    marginHorizontal: 20,
    flexDirection: 'row-reverse',
    marginTop: 14,
  },
  forgetText: {
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0.4,
    textAlign: 'center',
    color: '#f01515',
  },
  registerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0.4,
    textAlign: 'center',
    color: '#000000',
  },
  registerPink: {
    fontSize: 12,
    fontWeight: '700',
    fontStyle: 'normal',
    letterSpacing: 0.4,
    textAlign: 'center',
    color: '#ff4f8a',
    marginLeft: 2,
  },
});

interface Props {
  navigation: StackNavigationProp<MainParamList, 'LoginScreen'>;
}
const LoginScreen: React.FC<Props> = ({navigation}: Props) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const onLogin = async () => {
    let formdata = new FormData();
    formdata.append('username', id);
    formdata.append('password', pw);
    const response = await axios.post('http://15.164.95.156:3000/user/token/', {
      username: id,
      password: pw,
    });

    console.log(response);

    if (response.status === 200) {
      navigation.reset({
        index: 0,
        routes: [{name: 'MainScreen'}],
      });
    } else {
      Alert.alert('로그인 과정에서 문제가 발생했습니다!');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Container style={styles.container}>
        <Image source={logo} style={styles.logoImage} />
        <Image source={mainIllust} style={styles.illustImage} />
        <Input
          style={styles.input}
          value={id}
          onChange={setId}
          icon={avatar}
          label="닉네임"
        />
        <Input
          style={styles.input}
          value={pw}
          onChange={setPw}
          icon={password}
          label="Password"
          password
        />
        <View style={styles.forgetView}>
          <Pressable onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.forgetText}>비밀번호를 까먹으셨나요?</Text>
          </Pressable>
        </View>
        <Button
          color="#fff"
          label="로그인"
          style={styles.button}
          onPress={onLogin}
        />
        <View style={styles.registerView}>
          <Text style={styles.registerText}>처음이신가요?</Text>
          <Pressable onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.registerPink}>회원가입</Text>
          </Pressable>
        </View>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
