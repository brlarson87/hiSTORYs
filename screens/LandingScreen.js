import { Button, StyleSheet, Text, View, button } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const LandingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>LandingScreen</Text>
      <Button title='Continent Screen' onPress={() => navigation.push('Continent')}></Button>
    </View>
  )
}

export default LandingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.off_white
    }
})