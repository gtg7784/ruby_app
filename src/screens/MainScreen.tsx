import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {rupi, pobby, pati, edi, crong} from '../constants/image';
import Container from '../components/Container';
import ChatListItem from '../components/ChatListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fdfdfd',
  },
  titleView: {
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
    width: '100%',
    paddingBottom: 6,
    paddingLeft: 20,
    marginTop: 60,
  },
  titleText: {
    fontSize: 32,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0.4,
    color: '#000000',
  },
});

interface Props {
  navigation: StackNavigationProp<MainParamList, 'MainScreen'>;
}
const MainScreen: React.FC<Props> = ({navigation}: Props) => {
  const onPressChat = () => {
    navigation.navigate('ChatScreen');
  };
  return (
    <Container style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>채팅</Text>
      </View>
      <ChatListItem
        image={rupi}
        name="루피"
        desc="기쁠땐 나에게 찾아와! 들어줄게"
        onPress={onPressChat}
      />
      <ChatListItem
        image={crong}
        name="크롱"
        desc="뭐어? 화가 난다고?! 내가 욕해줄게"
        onPress={onPressChat}
      />
      <ChatListItem
        image={edi}
        name="에디"
        desc="무서운 순간이 있니? 나한테 털어놔!"
        onPress={onPressChat}
      />
      <ChatListItem
        image={pobby}
        name="포비"
        desc="난 슬플때가 제일 싫어. 같이 있을래?"
        onPress={onPressChat}
      />
      <ChatListItem
        image={pati}
        name="패티"
        desc="누군가에게 설레는 순간이 있니? 얘기해줄래? ㅎ.ㅎ"
        onPress={onPressChat}
      />
    </Container>
  );
};

export default MainScreen;
