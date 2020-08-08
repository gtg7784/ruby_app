import React from 'react';
import {
  StyleSheet,
  Pressable,
  Image,
  View,
  Text,
  ImageSourcePropType,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 34,
  },
  icon: {
    width: 52,
    height: 52,
  },
  textView: {
    marginLeft: 12,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0.4,
    color: '#000000',
  },
  desc: {
    fontSize: 11,
    fontWeight: '300',
    fontStyle: 'normal',
    letterSpacing: 0.4,
    color: '#666666',
  },
});

interface Props {
  onPress: () => void;
  image: ImageSourcePropType;
  name: string;
  desc: string;
}

const ChatListItem: React.FC<Props> = (props: Props) => {
  return (
    <Pressable onPress={props.onPress} style={styles.container}>
      <Image source={props.image} style={styles.icon} />
      <View style={styles.textView}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.desc}>{props.desc}</Text>
      </View>
    </Pressable>
  );
};

export default ChatListItem;
