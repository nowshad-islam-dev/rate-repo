import { NativeRouter } from 'react-router-native';
import { StatusBar } from 'expo-status-bar';
// Main component
import Main from './src/components/Main';

export default function App() {
  return (
    <>
      <NativeRouter future={{ v7_relativeSplatPath: true }}>
        <Main />
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
}
