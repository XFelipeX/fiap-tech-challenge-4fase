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
  personContainer: {
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
  personName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor: colors.text,
    marginTop: 7,
    marginBottom: 7,
  },
  buttonDiv: {
    flexDirection: 'row'
  },
  editButton: {
    width: 20,
    marginRight: 30,
    flex: 1,
    backgroundColor: colors.editButtonBackground,
    borderRadius: 8,
  },
  deleteButton: {
    width: 20,
    marginLeft: 30,
    flex: 1,
    backgroundColor: colors.deleteButtonBackground,
    borderRadius: 8,
  },
  buttonText: {
    textAlign: 'center',
    height: 30,
    padding: 5,
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.text,
  }
})