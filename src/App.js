/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
// import type {Node} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  // Button,
  // TouchableOpacity,
  // TouchableHighlight,
  Pressable,
  // Alert,
  // ToastAndroid,
  Modal,
  Image,
  ImageBackground,
} from 'react-native';

import MashButton from './components/BUTTON/MashButton';
import NativeModal from './components/MODAL/NativeModal';

// import {
//   Colors,
// } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function onChangeText(val) {
    setName(val);
  }

  function onPressHandler() {
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      setSubmitted(!submitted);
      setShowModal(true);
    }
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <ImageBackground
      source={require('../assets/harrison.jpg')}
      style={styles.body}>
      <NativeModal showModal={showModal} closeModal={closeModal} />

      <View style={styles.item}>
        <Text style={styles.text}>Please write your name</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder={'eg John Doe'}
          // secureTextEntry
          // editable={false}
          // multiline
        />

        <MashButton onPressHandler={onPressHandler} buttonText={'Submit'} />
      </View>

      {submitted ? (
        <View style={styles.flexCenter}>
          <Text> Your name is: {name}</Text>

          <Image style={styles.image} source={require('../assets/reyem.jpg')} />
        </View>
      ) : (
        <View style={styles.flexCenter}>
          <Image
            style={styles.image}
            source={require('../assets/harrison.jpg')}
            resizeMode={'stretch'}
          />
        </View>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderColor: 'pink',
    borderRadius: 10,
    justifyContent: 'center',
  },

  text: {
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    margin: 10,
    textTransform: 'uppercase',
  },

  item: {
    // backgroundColor: '#4ae1fa',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: '90%',
  },

  input: {
    borderWidth: 1,
    width: '100%',
    marginBottom: 10,
  },
  button: {
    width: '100%',
    backgroundColor: 'green',
    padding: 10,
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
  },
  image: {
    width: 250,
    height: 250,
  },

  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
