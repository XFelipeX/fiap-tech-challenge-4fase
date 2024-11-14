import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors'

const colors = Colors.dark;

export const styles = StyleSheet.create({
  menu: {
    width: 33,
    height: 33,
    color: colors.text
  },
  menuIcon: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
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
  },
  sidebar: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: colors.headerBackground,
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    zIndex: 999,
  },
  sidebarItems: {
    color: colors.text,
    fontSize: 20,
    padding: 8
  }
})