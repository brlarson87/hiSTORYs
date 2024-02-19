import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const FullStory = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>FullStory</Text>
      <Button title="home" onPress={() => navigation.navigate('Home')}></Button>
    </View>
  )
}

export default FullStory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.off_white
    }
})