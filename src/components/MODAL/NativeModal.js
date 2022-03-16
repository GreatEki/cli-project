import React from 'react';
import {Modal, View, Text, StyleSheet, Pressable} from 'react-native';
import propTypes from 'prop-types';

const NativeModal = props => {
  const {showModal, closeModal} = props;

  return (
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
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: 'lightblue',
    // backgroundColor: '#ff0',
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
});

NativeModal.propTypes = {
  showModal: propTypes.bool,
  closeModal: propTypes.func,
};

export default NativeModal;
