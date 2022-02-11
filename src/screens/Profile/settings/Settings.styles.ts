import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  password: {
    backgroundColor: '#abcdef',
    width: 120,
    height: 30,
    borderRadius: 4,
    padding: 4,
  },
  modalWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    height: 200,
    width: 200,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  closeModal: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10,
  },
});
