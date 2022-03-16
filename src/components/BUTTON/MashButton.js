import React from 'react';
import {StyleSheet, Pressable, Text} from 'react-native';
import propTypes from 'prop-types';

const MashButton = props => {
  return (
    <Pressable
      onPress={props.onPressHandler}
      style={({pressed}) => [
        {backgroundColor: pressed ? '#dddddd' : '#00ff00'},
        styles.button,
      ]}
      hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
      android_ripple={{color: '#00f'}}>
      <Text style={styles.btnText}>{props.buttonText}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: 'green',
    padding: 10,
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
  },
});

MashButton.propTypes = {
  onPressHandler: propTypes.func,
  buttonText: propTypes.string,
};

export default MashButton;
