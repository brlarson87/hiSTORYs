import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const TimePeriodScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>TimePeriodScreen</Text>
      <Button title='Story Pick' onPress={() => navigation.push('Story Pick')}></Button>
    </View>
  )
}

export default TimePeriodScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.off_white
    }
})