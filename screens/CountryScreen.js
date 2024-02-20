import { StyleSheet, Text, View, Button, Pressable, Image, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { AntDesign } from '@expo/vector-icons';

import USFlag from '../assets/img/United-States-Flag.png'
import MexicoFlag from '../assets/img/Mexico-Flag.png'
import CanadaFlag from '../assets/img/Canada-Flag.png'

const windowWidth = Dimensions.get('window').width;

const CountryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <ScrollView contentContainerStyle={{ width: windowWidth, alignItems: 'center' }}>
            <View style={styles.shadowContainer}>
                <Pressable style={styles.countryContainer} onPress={() => navigation.push('Time Period')}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.flagImg} source={USFlag}/>
                    </View>
                    <View style={styles.textAndIcon}>
                        <Text style={styles.countryText}>United States</Text>
                        <AntDesign style={{ marginRight: 5}} name="rightcircleo" size={24} color={Colors.primary_gold} />
                    </View>
                </Pressable>
            </View>

            <View style={styles.shadowContainer}>
                <Pressable style={styles.countryContainer} onPress={() => navigation.push('Time Period')}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.flagImg} source={MexicoFlag}/>
                    </View>
                    <View style={styles.textAndIcon}>
                        <Text style={styles.countryText}>Mexico</Text>
                        <AntDesign style={{ marginRight: 5}} name="rightcircleo" size={24} color={Colors.primary_gold} />
                    </View>
                </Pressable>
            </View>

            <View style={styles.shadowContainer}>
                <Pressable style={styles.countryContainer} onPress={() => navigation.push('Time Period')}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.flagImg} source={CanadaFlag}/>
                    </View>
                    <View style={styles.textAndIcon}>
                        <Text style={styles.countryText}>Canada</Text>
                        <AntDesign style={{ marginRight: 5}} name="rightcircleo" size={24} color={Colors.primary_gold} />
                    </View>
                </Pressable>
            </View>
        </ScrollView>

    </View>
  )
}

export default CountryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 40,
        backgroundColor: Colors.off_white
    },
    shadowContainer: {
        shadowColor: '#000',
        shadowOffset: {width: -4, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    countryContainer: {
        // borderColor: Colors.primary_gold,
        // borderWidth: 1,
        borderRadius: 8,
        backgroundColor: "#FEFCEE",
        width: '85%',
        height: 60,
        marginVertical: 9,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    textAndIcon: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    countryText: {
        fontFamily: 'Fredoka-Regular',
        color: Colors.primary_green,
        fontSize: 18,
        marginLeft: 8
    },
    imageContainer: {
        width: '35%',
        height: '100%'
    },
    flagImg: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    }
})