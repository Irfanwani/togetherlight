import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: '#7f0e78',
    marginVertical: 10,
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  button: {
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 50,
    alignSelf: 'center',
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#ff5fff',
  },
  buttontext: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  error: {
    color: '#d30a08',
    fontSize: 12,
    alignSelf: 'center',
    marginTop: 8,
    marginBottom: 5,
  },
});

export default styles;
