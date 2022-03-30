import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import Path from '../../constants/urls';

const ScreenA = props => {
  function onPressHandler() {
    props.navigation.navigate(Path.ScreenB);
  }

  return (
    <View>
      <View>
        <Text> Screen A </Text>
      </View>

      <View style={styles.buttonView}>
        <Pressable
          onPress={onPressHandler}
          style={({pressed}) => [
            {backgroundColor: pressed ? '#ddd' : 'blue'},
            styles.button,
          ]}>
          <Text> View Screen B</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    width: '50%',
    marginTop: 0,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  button: {
    padding: 10,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default ScreenA;
