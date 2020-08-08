import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import axios from 'axios';

import {arrow} from '../constants/image';
import Container from '../components/Container';
import ChattingBox from '../components/ChattingBox';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fdfdfd',
  },
  headerView: {
    width: '100%',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0.4,
    color: '#000000',
  },
  dateView: {
    width: 175,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#ff4f8a',
    marginTop: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0.4,
    color: '#fdfdfd',
  },
  chatView: {
    width: Dimensions.get('window').width - 40,
    marginHorizontal: 20,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
  },
  chatInput: {
    width: '100%',
    height: 20,
    fontSize: 17,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0.4,
    color: '#000000',
    marginLeft: 16,
  },
  chatButton: {
    width: 36,
    height: 36,
    backgroundColor: '#2e3a77',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -36,
  },
});

interface Props {
  navigation: StackNavigationProp<MainParamList, 'ChatScreen'>;
}

const ChatScreen: React.FC<Props> = () => {
  const [chat, setChat] = useState('');
  const [arr, setArr] = useState([]);
  let [, setState] = useState();

  const insets = useSafeAreaInsets();

  const date = new Date();
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const dateString = `${date.getFullYear().toString().slice(2, 4)}/${(
    '0' +
    (date.getMonth() + 1)
  ).slice(-2)}/${('0' + date.getDate()).slice(-2)} ${days[date.getDay()]}`;

  const sendMsg = async () => {
    let formData = new FormData();
    formData.append('sentence', chat);

    const ar: string[] = arr;
    ar.push(chat);
    const response = await axios.post('http://52.185.172.43/chat', formData);

    setChat('');
    ar.push(response.data.msg);
    setArr(ar);
    setState({});
  };

  return (
    <Container style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>루피</Text>
      </View>
      <View style={styles.dateView}>
        <Text style={styles.dateText}>{dateString}</Text>
      </View>
      {arr.map((item: string, index: number) => (
        <ChattingBox msg={item} isSender={index % 2 === 0} key={index} />
      ))}
      <View
        style={StyleSheet.flatten([
          styles.chatView,
          {bottom: insets.bottom ?? 0},
        ])}>
        <TextInput
          value={chat}
          onChangeText={(text: string) => setChat(text)}
          style={styles.chatInput}
        />
        <Pressable style={styles.chatButton} onPress={() => sendMsg()}>
          <Image source={arrow} />
        </Pressable>
      </View>
    </Container>
  );
};

export default ChatScreen;
