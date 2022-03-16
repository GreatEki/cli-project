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
      source={require('./assets/harrison.jpg')}
      style={styles.body}>
      <Modal
        visible={showModal}
        onRequestClose={closeModal}
        animationType={'slide'}
        hardwareAccelerated>
        <View style={styles.modalCenteredView}>
          <View style={styles.warningModal}>
            <View style={styles.warningModalTitle}>
              <Text style={styles.text}>WARNING! Modal Title </Text>
            </View>

            <View style={styles.warningModalBody}>
              <Text style={styles.modalText}>
                The name must be longer than 3 characters
              </Text>
            </View>
            <View>
              <Pressable
                style={styles.warningModalButton}
                onPress={closeModal}
                android_ripple={{color: 'whitesmoke'}}>
                <Text style={styles.modalText}>OK</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
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

        <Pressable
          onPress={onPressHandler}
          style={({pressed}) => [
            {backgroundColor: pressed ? '#dddddd' : '#00ff00'},
            styles.button,
          ]}
          hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
          android_ripple={{color: '#00f'}}>
          <Text style={styles.btnText}>
            {submitted ? 'Register' : 'Submitting'}
          </Text>
        </Pressable>
      </View>

      {submitted ? (
        <View style={styles.flexCenter}>
          <Text> Your name is: {name}</Text>

          <Image style={styles.image} source={require('./assets/reyem.jpg')} />
        </View>
      ) : (
        <View style={styles.flexCenter}>
          <Image
            style={styles.image}
            source={require('./assets/harrison.jpg')}
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
  modalCenteredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  warningModal: {
    width: 300,
    height: 300,
    backgroundColor: '#fff',
    borderColor: '#000',
    borderRadius: 20,
  },
  warningModalTitle: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warningModalBody: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  modalText: {
    fontSize: 25,
    textAlign: 'center',
  },
  warningModalButton: {
    backgroundColor: 'lightgrey',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
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
