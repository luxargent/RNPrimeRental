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
    fontFamily: 'Roboto-Black',
    color: '#FFF',
    fontSize: 36,
    marginTop: 50,
    marginBottom: 100,
    paddingLeft: 20,
  },
  content: {
    paddingTop: 50,
    alignItems: 'center',
  },
  textInput: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(250, 250, 250, 0.4)',
    width: '80%',
    fontFamily: 'Nunito-Regular',
  },
  signupButton: {
    backgroundColor: '#FFCD61',
    width: '80%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  signupText: {
    fontFamily: 'Nunito-Black',
    fontSize: 18,
  },
  alreadyHave: {
    marginTop: 30,
    flexDirection: 'row',
  },
  alreadyText: {
    fontFamily: 'Nunito-Regular',
    color: '#FFF',
  },
  loginText: {
    fontFamily: 'Nunito-Regular',
    color: '#FFF',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});
