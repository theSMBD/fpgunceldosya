import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './app/screens/HomeScreen';
import CoffeeDetailsScreen from './app/screens/CoffeeDetailsScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen></HomeScreen>      
            <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
