import { StyleSheet, Text, View, Button, ScrollView, Pressable, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { AntDesign } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

const StoryPickScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
            <Text styles={styles.title}>United States</Text>

            <Pressable style={styles.story} onPress={() => navigation.push('Full Story')}>
                <View style={styles.titleAndDescription}>
                    <Text style={styles.StoryTitle}>Pearl Harbor Attacks</Text>
                    <Text style={styles.StoryDescription}>Detailed story on the Japanese attack on the United States naval base in Hawaii</Text>
                    <Text style={styles.date}>1941</Text>
                </View>

                <AntDesign name="rightcircleo" size={24} color={Colors.primary_gold} />
                
            </Pressable>

            

       </ScrollView>
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
    },
    scrollView: {
        width: windowWidth,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    story: {
        borderColor: Colors.primary_gold,
        borderWidth: 1,
        borderRadius: 8,
        width: '80%',
        padding: 15,
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    titleAndDescription: {
        width: '80%'
    },
    StoryTitle: {
        fontSize: 19,
        fontWeight: 'bold',
        color: Colors.primary_gold,
        marginBottom: 3
    },
    StoryDescription: {
        marginBottom: 6
    },
    date: {
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'flex-end'
    }
    
})