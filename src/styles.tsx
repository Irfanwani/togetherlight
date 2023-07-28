import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    flex: 0.8,
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
    color: 'black',
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
  title: {
    fontSize: 30,
    alignSelf: 'center',
    paddingBottom: 30,
    color: '#000',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  empty: {
    color: '#555',
    alignSelf: 'center',
    paddingTop: 30,
    fontSize: 16,
  },
  cardview: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    margin: 10,
  },
  cardtitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#004610',
  },
  cardbody: {
    fontSize: 15,
    color: '#373a33',
  },
  reload: {
    fontSize: 25,
  },
  postpage: {
    flex: 0.7,
    justifyContent: 'center',
  },
  detailrow: {
    flexDirection: 'row',
    padding: 30,
    alignItems: 'center',
  },
  detailtitle: {
    color: '#530c53',
    fontSize: 25,
  },
  detailvalue: {
    color: '#232623',
    fontSize: 20,
    maxWidth: '80%',
  },
});

export default styles;
