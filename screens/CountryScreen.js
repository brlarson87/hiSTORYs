import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const CountryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>CountryScreen</Text>
      <Button title="To Time Period" onPress={() => navigation.navigate('Time Period')}></Button>
    </View>
  )
}

export default CountryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.off_white
    }
})