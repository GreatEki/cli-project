import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MashButton} from '../../components';
import Path from '../../constants/urls';
const ScreenB = ({navigation}) => {
  function onPressHandler() {
    navigation.navigate(Path.ScreenA);
  }
  return (
    <View>
      <Text> Screen B</Text>

      <View style={styles.buttonArea}>
        <MashButton
          onPressHandler={onPressHandler}
          buttonText={'Go to Screen A'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonArea: {
    width: '50%',
    marginTop: 0,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
});
export default ScreenB;
