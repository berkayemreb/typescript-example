import { StyleSheet, Text, View } from 'react-native';

import Welcome from './components/Welcome';
import Pet from './components/Pet';

export default function App() {

  const petName = {
    firstname: 'Roger',
    lastname: 'Porticous',
  }

  return (
    <View style={styles.container}>
      <Welcome name='Berkay' age={22} gender={true} />
      <Pet petName={petName} type='Komodo Drogon' />
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
