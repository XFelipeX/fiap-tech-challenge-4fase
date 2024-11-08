import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors'

const colors = Colors.dark;

export const styles = StyleSheet.create({
  menu: {
    width: 40,
    height: 33,
    backgroundColor: '#FFFFFF'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 64,
    backgroundColor: colors.headerBackground,
    paddingHorizontal: 24,
    paddingVertical: 15,
    marginTop: 25,
  },
  logo: {
    color: colors.logo,
    fontSize: 24,
    fontWeight: 'bold',
  }
})