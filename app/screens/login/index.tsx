import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './styles';
import Header from '@/components/Header';
import { api } from '@/services/api';
import { useAuth } from '@/context/AuthContext';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Por favor, informe o email de usuário.'),

  password: Yup.string()
    .min(4, 'A senha deve possuir pelo menos 8 caracteres!')
    .required('Por favor, informe uma senha.'),
});

interface FormValues {
  email: string;
  password: string;
}

export default function Login() {
  const navigation = useNavigation<any>();
  const [formData] = useState<FormValues>({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();

  const handleLogin = (values: FormValues) => {
    api
      .post('/auth/login', values)
      .then((response) => {
        login();
        AsyncStorage.setItem('token', response.data.token);
        navigation.navigate('PostsAdmin');
      })
      .catch((error) => {
        setError('Usuário e/ou senha inválidos.');
        console.error('Erro ao logar o usuário: ', error);
      });
  };

  return (
    <>
      <Header />
      <Formik
        initialValues={formData}
        onSubmit={(values) => handleLogin(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, values, errors, handleSubmit }) => (
          <>
            <ScrollView contentContainerStyle={styles.container}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="default"
              />

              <Text style={styles.label}>Senha</Text>
              <TextInput
                style={[styles.input]}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                keyboardType="default"
                secureTextEntry
              />
              {errors.email && <Text style={styles.error}>{errors.email}</Text>}
              {errors.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}
              {error && <Text style={styles.error}>{error}</Text>}
              <TouchableOpacity
                style={styles.buttonLogin}
                onPress={handleSubmit}
              >
                <Text style={styles.buttonText}>Entrar</Text>
              </TouchableOpacity>
            </ScrollView>
          </>
        )}
      </Formik>
    </>
  );
}
