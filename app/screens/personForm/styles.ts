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
    marginBottom: 33
  },
  label: {
    color: colors.text,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 20,
  },
  input: {
    backgroundColor: colors.secondBackground,
    height: 40,
    borderRadius: 5,
    borderColor: colors.border,
    borderWidth: 1,
    fontSize: 16,
    color: colors.text,
    paddingHorizontal: 10
  },
  errorMessage: {
    marginTop: 2,
    fontSize: 14,
    color: colors.errorText
  },
  submitButton: {
    backgroundColor: colors.buttonBackground,
    marginTop: 57,
    marginHorizontal: 'auto',
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
    marginTop: 60
  }
})