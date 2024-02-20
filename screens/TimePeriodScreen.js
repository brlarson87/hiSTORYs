import { StyleSheet, Text, View, Button, Pressable, ScrollView, Dimensions } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Colors from '../constants/Colors'

const windowWidth = Dimensions.get('window').width;

const TimePeriodScreen = ({ navigation }) => {
    
  return (
    <View style={styles.container}>
        {/* <Text styles={styles.title}>United States</Text> */}
        <ScrollView contentContainerStyle={styles.scrollView}>
            

            <Pressable style={styles.timePeriod} onPress={() => navigation.push('Story Pick')}>
                <Text style={styles.timePeriodText}>2000-current</Text>
            </Pressable>

            <Pressable style={styles.timePeriod} onPress={() => navigation.push('Story Pick')}>
                <Text style={styles.timePeriodText}>1900-1999</Text>
            </Pressable>

            <Pressable style={styles.timePeriod} onPress={() => navigation.push('Story Pick')}>
                <Text style={styles.timePeriodText}>1800-1899</Text>
            </Pressable>

            <Pressable style={styles.timePeriod} onPress={() => navigation.push('Story Pick')}>
                <Text style={styles.timePeriodText}>1700-1799</Text>
            </Pressable>

            <Pressable style={styles.timePeriod} onPress={() => navigation.push('Story Pick')}>
                <Text style={styles.timePeriodText}>1600-1699</Text>
            </Pressable>

            <Pressable style={styles.timePeriod} onPress={() => navigation.push('Story Pick')}>
                <Text style={styles.timePeriodText}>1500-1599</Text>
            </Pressable>
       </ScrollView>
    </View>
  )
}

export default TimePeriodScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 40,
        backgroundColor: Colors.off_white,
        
    },
    scrollView: {
        width: windowWidth,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    title: {
        fontFamily: 'Fredoka-Regular',
        marginVertical: 12,
        fontSize: 20
    },
    timePeriod: {
        backgroundColor: "#FEFCEE",
        borderRadius: 8,
        width: '80%',
        padding: 15,
        marginVertical: 9,
        shadowColor: '#000',
        shadowOffset: {width: 1, height: 3},
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 10
    },
    timePeriodText: {
        fontFamily: 'Fredoka-Regular',
        color: Colors.primary_green,
        fontSize: 18
    }
})