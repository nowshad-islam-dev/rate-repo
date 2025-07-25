import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
//import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

// components
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SingIn';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e4e8',
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
