import { Button, ScrollView, StyleSheet, Text, View, Dimensions, Pressable } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import Colors from '../constants/Colors'
import { AntDesign } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
import { story } from '../dummy-data';

const FullStory = ({ navigation }) => {

  return (
    <>
    <View style={[styles.opacityHeader]}>
        <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name="back" size={28} color={Colors.primary_gold} />
        </Pressable>
       
        <Text style={[styles.hiddenText, { opacity: 0 }]}>Pearl Harbor Attacks</Text>

        <Pressable onPress={() => navigation.navigate('Home')}>
            <AntDesign name='home' size={28} color={Colors.primary_gold}/>  
        </Pressable>
        
    </View> 
    <View style={styles.container}>
       
      <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Pearl Harbor Attacks</Text>
        </View>
        {story.fullStory.map((paragraph, index) => (
        <View style={styles.paragraphContainer} key={index}>
            <Text style={styles.paragraph}>{paragraph}</Text>
        </View>
        ))}
      </ScrollView>
    </View>
    </>
  )
}

export default FullStory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.off_white,
    },
    opacityHeader: {
        position: 'absolute',
        top: 0,
        height: 90,
        width: '100%',
        backgroundColor: Colors.off_white,
        zIndex: 5,
        flexDirection: 'row',
        alignItems:'flex-end',
        justifyContent: 'space-between',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        // shadowOpacity: 0.2,
        // shadowRadius: 10,
        // elevation: 10
    },
    hiddenText: {
        fontSize: 18,
        color: Colors.primary_gold
    },
    scrollView: {
        width: windowWidth,
        paddingBottom: 170,
        marginTop: 135
    },
    titleContainer: {
        padding: 30
    },
    title: {
        fontSize: 30,
        fontFamily: 'Fredoka-SemiBold',
        textDecorationLine: 'underline',
        color: Colors.primary_gold
    },
    paragraphContainer: {
        backgroundColor: "#FEFCEE",
        marginHorizontal: 12,
        marginVertical: 5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width: 6, height: 3},
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 10
    },
    paragraph: {
        fontFamily: 'Fredoka-Regular',
        fontSize: 18,
        paddingHorizontal: 10,
        paddingVertical: 10,
        lineHeight: 30,
        letterSpacing: 1.1
    }
})