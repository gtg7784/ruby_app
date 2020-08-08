import React from 'react';
import {
  StyleSheet,
  TextInput,
  Image,
  View,
  Text,
  ImageSourcePropType,
  ViewStyle,
  Dimensions,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 40,
    marginHorizontal: 20,
    height: 64,
    borderRadius: 12,
    backgroundColor: '#f2f2f2',
    shadowColor: 'rgba(34, 34, 34, 0.15)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 8,
    shadowOpacity: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 20,
  },
  icon: {},
  InputWrap: {
    marginLeft: 12,
    flexDirection: 'column',
    alignContent: 'center',
  },
  label: {
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0.4,
    color: '#000000',
    width: '100%',
    textAlign: 'left',
  },
  input: {
    fontSize: 17,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0.4,
    color: '#000000',
    width: '100%',
    minWidth: 200,
  },
});

interface Props {
  icon: ImageSourcePropType;
  label: string;
  password?: boolean;
  onChange: (text: string) => void;
  value: string;
  style?: ViewStyle;
}

const Input: React.FC<Props> = (props: Props) => {
  return (
    <View style={[styles.container, props.style]}>
      <Image source={props.icon} style={styles.icon} />
      <View style={styles.InputWrap}>
        <Text style={styles.label}>{props.label}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => props.onChange(text)}
          value={props.value}
          secureTextEntry={props.password}
          maxLength={24}
        />
      </View>
    </View>
  );
};

export default Input;
