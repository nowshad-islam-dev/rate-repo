import { TextInput, Pressable, View, StyleSheet, Platform } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Text from './Text';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log('Form values:', values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        style={[
          styles.input,
          formik.touched.username &&
            formik.errors.username &&
            styles.inputError,
        ]}
        placeholder="Username"
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: 'red' }}>{formik.errors.username}</Text>
      )}
      <TextInput
        secureTextEntry
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        style={[
          styles.input,
          formik.touched.password &&
            formik.errors.password &&
            styles.inputError,
        ]}
        placeholder="Password"
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: 'red' }}>{formik.errors.password}</Text>
      )}
      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: '#a1a1a1',
    borderRadius: 5,
    marginBottom: 5.5,
  },
  inputError: { borderColor: 'red' },
  button: {
    backgroundColor: '#2160c4',
    borderRadius: 5,
    padding: 12.5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default SignIn;
