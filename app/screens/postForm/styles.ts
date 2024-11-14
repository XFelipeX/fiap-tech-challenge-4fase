import { StyleSheet } from "react-native";
import { Colors } from '@/constants/Colors'

const colors = Colors.dark;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 24,
    paddingTop: 26,
    paddingBottom: 26
  },
  title: {
    color: colors.text,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 13
  },
  label: {
    color: colors.text,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5
  },
  input: {
    backgroundColor: colors.secondBackground,
    height: 34,
    borderRadius: 5,
    borderColor: colors.border,
    borderWidth: 1,
    color: colors.text,
    paddingHorizontal: 10
  },
  contentInput: {
    paddingVertical: 10,
    height: 'auto',
    lineHeight: 20
  },
  errorMessage: {
    marginTop: 2,
    fontSize: 14,
    color: colors.errorText
  },
  submitButton: {
    backgroundColor: colors.buttonBackground,
    marginHorizontal: 'auto',
    marginTop: 57,
    paddingHorizontal: 35,
    paddingVertical: 13,
    borderRadius: 5
  },
  submitButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.buttonText,
  },
  bottomContainer: {
    marginTop: 60,
    display: 'flex',
  },
  returnButton: {
    backgroundColor: colors.editButtonBackground,
    marginHorizontal: 'auto',
    paddingHorizontal: 35,
    paddingVertical: 13,
    borderRadius: 5
  },
  buttonsContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})