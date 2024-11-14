import {StyleSheet} from 'react-native';
import {Colors} from '@/constants/Colors';

const colors = Colors.dark;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 18,
    paddingTop: 26,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  formArea:{
    backgroundColor: colors.buttonBackground,
    width: '80%',
    height:1,
  },
  input: {
    backgroundColor: colors.secondBackground,
    color: colors.text,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
    marginTop: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  label: {
    color: colors.text,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
  },
  buttonLogin: {
    backgroundColor: colors.buttonBackground,
    padding: 15,
    borderRadius: 10,
    width: '50%',
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: colors.text,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});