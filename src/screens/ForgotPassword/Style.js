import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
  },
  heading: {
    fontFamily: 'roboto-black',
    color: '#FFF',
    fontSize: 36,
    marginTop: 100,
    padding: 25,
    textAlign: 'center',
  },
  content: {
    marginTop: 70,
    alignItems: 'center',
  },
  enterEmailText: {
    fontFamily: 'nunito-regular',
    color: '#FFF',
  },
  textInput: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(250, 250, 250, 0.4)',
    width: '80%',
    fontFamily: 'nunito-regular',
  },
  sendButton: {
    marginVertical: 20,
    backgroundColor: '#FFCD61',
    width: '80%',
    height: '18%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendText: {
    fontFamily: 'nunito-black',
    fontSize: 18,
  },
  resendButton: {
    backgroundColor: '#FFF',
    width: '80%',
    height: '18%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
