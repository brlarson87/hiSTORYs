import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const StoryPickScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>StoryPickScreen</Text>
      <Button title='Story Screen' onPress={() => navigation.push('Full Story')}></Button>
    </View>
  )
}

export default StoryPickScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.off_white
    }
})