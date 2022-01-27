import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Hero from './components/Hero';
import LocateButton from './components/LocateButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Hero/>
      <LocateButton/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
