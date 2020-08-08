import React from 'react';
import {StyleSheet, Pressable, Text, ViewStyle, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 40,
    marginHorizontal: 20,
    height: 64,
    borderRadius: 32,
    shadowColor: 'rgba(34, 34, 34, 0.15)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 8,
    shadowOpacity: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0.4,
    textAlign: 'center',
  },
});

interface Props {
  color: string;
  label: string;
  style: ViewStyle;
  onPress: () => void;
}

const Button: React.FC<Props> = (props: Props) => {
  return (
    <Pressable style={[styles.container, props.style]} onPress={props.onPress}>
      <Text style={[styles.label, {color: props.color}]}>{props.label}</Text>
    </Pressable>
  );
};

export default Button;
