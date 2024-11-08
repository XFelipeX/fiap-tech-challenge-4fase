import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors'

const colors = Colors.dark;

export const styles = StyleSheet.create({
  searchBarContainer: {
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.secondBackground,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    marginHorizontal: 17,
    marginBottom: 64,
    paddingLeft: 10,
  },
  input: {
    height: '100%',
    width: '85%',
    color: colors.text,
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  }
})