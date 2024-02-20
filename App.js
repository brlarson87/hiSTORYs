import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';

const fetchFonts = () => {
  return Font.loadAsync({
    'Fredoka-Bold': require('./assets/fonts/Fredoka-Bold.ttf'),
    'Fredoka-Light': require('./assets/fonts/Fredoka-Light.ttf'),
    'Fredoka-Medium': require('./assets/fonts/Fredoka-Medium.ttf'),
    'Fredoka-Regular': require('./assets/fonts/Fredoka-Regular.ttf'),
    'Fredoka-SemiBold' : require('./assets/fonts/Fredoka-SemiBold.ttf')
  });
}

import NavigationHub from './navigation/NavigationHub';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await fetchFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }


  return (
    <>
      <StatusBar style="auto" />
      <NavigationHub />
    </>
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
