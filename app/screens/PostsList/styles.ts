import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors'

const colors = Colors.dark;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 18,
    paddingTop: 26,
  },
  feedBackMessage: {
    color: colors.text,
    textAlign: 'center'
  },
  bottomContainer: {
    marginTop: 30,
    display: 'flex',
  }
})