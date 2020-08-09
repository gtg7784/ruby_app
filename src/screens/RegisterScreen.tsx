import React, {useState} from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import axios from 'axios';

import {avatar, mail, password} from '../constants/image';
import Container from '../components/Container';
import Input from '../components/Input';
import Button from '../components/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fdfdfd',
  },
  headerView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '800',
    fontStyle: 'normal',
    letterSpacing: 0.4,
    textAlign: 'center',
    color: '#000000',
    marginBottom: 74,
  },
  input: {
    marginTop: 32,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#ff4f8a',
  },
});

interface Props {
  navigation: StackNavigationProp<MainParamList, 'RegisterScreen'>;
}
const RegisterScreen: React.FC<Props> = ({navigation}: Props) => {
  const insets = useSafeAreaInsets();
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');

  const onRegister = async () => {
    let formData = new FormData();
    formData.append('username', nickname);
    formData.append('email', email);
    formData.append('password1', pw);
    formData.append('password2', pwCheck);

    const response = await axios.post(
      'http://15.164.95.156:3000/user/register/',
      formData,
    );

    console.log(response);

    if (response.status === 201) {
      navigation.goBack();
    } else {
      Alert.alert('회원가입 과정에서 문제가 발생했습니다!');
    }
  };

  return (
    <Container style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>회원가입</Text>
      </View>
      <Input
        style={StyleSheet.flatten([styles.input, {marginTop: insets.top}])}
        value={nickname}
        onChange={setNickname}
        icon={avatar}
        label="닉네임"
      />
      <Input
        style={styles.input}
        value={email}
        onChange={setEmail}
        icon={mail}
        label="E-mail"
      />
      <Input
        style={styles.input}
        value={pw}
        onChange={setPw}
        icon={password}
        label="비밀번호"
        password
      />
      <Input
        style={styles.input}
        value={pwCheck}
        onChange={setPwCheck}
        icon={password}
        label="비밀번호 확인"
        password
      />

      <Button
        color="#fff"
        label="회원가입"
        style={StyleSheet.flatten([
          styles.button,
          {
            marginBottom: insets.bottom,
          },
        ])}
        onPress={onRegister}
      />
    </Container>
  );
};

export default RegisterScreen;
