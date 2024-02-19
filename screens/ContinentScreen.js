import { StyleSheet, Text, View, Button, Dimensions, ScrollView, Pressable } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const ContinentScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.rowWrap}>

        <Pressable 
            style={styles.continentContainer}
            android_ripple={{ color: Colors.secondary_gold}}
            onPress={() => navigation.push('Country Pick')}
        >
            <Text>North America</Text>
        </Pressable>

        <Pressable 
            style={styles.continentContainer}
            android_ripple={{ color: Colors.secondary_gold}}
            onPress={() => navigation.push('Country Pick')}
        >
            <Text>Asia</Text>
        </Pressable>

        <Pressable 
            style={styles.continentContainer}
            android_ripple={{ color: Colors.secondary_gold}}
            onPress={() => navigation.push('Country Pick')}
        >
            <Text>Africa</Text>
        </Pressable>

        <Pressable 
            style={styles.continentContainer}
            android_ripple={{ color: Colors.secondary_gold}}
            onPress={() => navigation.push('Country Pick')}
        >
            <Text>North America</Text>
        </Pressable>

        <Pressable 
            style={styles.continentContainer}
            android_ripple={{ color: Colors.secondary_gold}}
            onPress={() => navigation.push('Country Pick')}
        >
            <Text>Asia</Text>
        </Pressable>

        <Pressable 
            style={styles.continentContainer}
            android_ripple={{ color: Colors.secondary_gold}}
            onPress={() => navigation.push('Country Pick')}
        >
            <Text>Africa</Text>
        </Pressable>

      </ScrollView>  
    </View>
  )
}

export default ContinentScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.off_white
    },
    rowWrap: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    },
    continentContainer: {
        width: windowWidth / 2 - 50,
        height: windowWidth / 2 - 40,
        borderWidth: 1,
        borderColor: Colors.primary_gold,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 5
    }
})