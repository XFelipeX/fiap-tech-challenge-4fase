import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors'

const colors = Colors.dark;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingHorizontal: 24,
    paddingVertical: 26,
    flex: 1,
  },
  infoContainer: {
    flexDirection: 'row',
    gap: 20
  },
  infoText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: colors.infoText,
    marginBottom: 23
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 25
  },
  content: {
    fontSize: 18,
    lineHeight: 25,
    color: colors.contentPostText,
    paddingHorizontal: 10,
    flexWrap: 'wrap'
  },
  backButtonContainer: {
    marginTop: 40,
    marginBottom: 70,
    marginHorizontal: 'auto'
  },
  backButton: {
    backgroundColor: colors.buttonBackground,
    paddingHorizontal: 35,
    paddingVertical: 13,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.buttonText,
  }
})