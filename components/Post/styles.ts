import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors'

const colors = Colors.dark;

export const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: colors.secondBackground,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 25,
    // IOS
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    // ANDROID
    elevation: 5,
  },
  postContainerAdmin: {
    backgroundColor: colors.secondBackground,
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    // IOS
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    // ANDROID
    elevation: 5,
  },
  title: {
    color: colors.text,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 11
  },
  content: {
    color: colors.text,
    fontSize: 14,
    textAlign: 'justify',
    marginBottom: 19
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoText: {
    color: colors.infoText
  }
})