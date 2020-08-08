import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  sendWrap: {
    width: '100%',
    flexDirection: 'row-reverse',
    paddingHorizontal: 20,
  },
  sendContainer: {
    borderRadius: 13,
    backgroundColor: '#2e3a77',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  sendText: {
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0.4,
    color: '#fdfdfd',
  },
  recvWrap: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  recvContainer: {
    borderRadius: 13,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  recvText: {
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0.4,
    color: '#000000',
  },
});

interface Props {
  isSender?: boolean;
  msg: string;
}

const ChattingBox: React.FC<Props> = (props: Props) => {
  return props.isSender ? (
    <View style={styles.sendWrap}>
      <View style={styles.sendContainer}>
        <Text style={styles.sendText}>{props.msg}</Text>
      </View>
    </View>
  ) : (
    <View style={styles.recvWrap}>
      <View style={styles.recvContainer}>
        <Text style={styles.recvText}>{props.msg}</Text>
      </View>
    </View>
  );
};

export default ChattingBox;
