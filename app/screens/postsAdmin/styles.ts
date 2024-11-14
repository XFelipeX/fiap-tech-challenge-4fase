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
  containerButtons:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    backgroundColor: colors.secondBackground,
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopWidth: 2,
    borderTopColor: colors.border,
  },
  editButton: {
    backgroundColor: colors.editButtonBackground,
    padding: 5,
    borderRadius: 10,
    width: '25%',
  },
  deleteButton: {
    backgroundColor: colors.deleteButtonBackground,
    padding: 5,
    borderRadius: 10,
    width: '25%',
  },
  buttonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})