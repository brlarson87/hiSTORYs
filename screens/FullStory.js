import { Button, ScrollView, StyleSheet, Text, View, Dimensions, Pressable } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import Colors from '../constants/Colors'
import { AntDesign } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
import { story } from '../dummy-data';

const FullStory = ({ navigation }) => {

  return (
    <View style={styles.container}>
        
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Pearl Harbor Attacks</Text>
        </View>
        {story.fullStory.map((paragraph, index) => (<Text style={styles.paragraph} key={index}>{paragraph}</Text>))}
      </ScrollView>
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
    },
    scrollView: {
        width: windowWidth,
        paddingBottom: 50
    },
    titleContainer: {
        padding: 30
    },
    title: {
        fontSize: 30,
        textDecorationLine: 'underline',
        color: Colors.primary_gold
    },
    paragraph: {
        fontSize: 18,
        paddingHorizontal: 25,
        paddingVertical: 6,
        lineHeight: 30
    }
})