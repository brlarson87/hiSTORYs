import { 
    Button, 
    ScrollView, 
    StyleSheet, 
    Text, 
    View, 
    Dimensions, 
    Pressable,
    ActivityIndicator } from 'react-native'
import React, { 
    useEffect, 
    useState } from 'react'
import { app } from '../firebase/firebase'
import {
    getFirestore,
    query,
    where,
    getDocs,
    collection,
   } from "firebase/firestore";
import Colors from '../constants/Colors'
import { AntDesign } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
import { story } from '../dummy-data';

const FullStory = ({ navigation }) => {
    const [storyTitle, setStoryTitle] = useState();
    //const [description, setDescription] = useState();
    const [fullStory, setFullStory] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const db = getFirestore(app);

    useEffect(() => {
        const fetchStory = async () => {
            // const q = query(collection(db, "United-States"), where(db.FieldPath.documentId(), '==', 'BkCCpkfUdrH6iZ2IPXR3'));
            const q = query(collection(db, "United-States"));
            const stories = await getDocs(q);
            stories.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                storyDoc = doc.data();
                setStoryTitle(storyDoc.title);
                setFullStory(storyDoc.fullStory)
              });
        }

        fetchStory();
    }, [])

    if(isLoading && !fullStory) {
        return <View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator size="large" color={Colors.primary_gold} />
               </View>
    }

  return (
    <>
    <View style={[styles.opacityHeader]}>
        <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name="back" size={28} color={Colors.primary_gold} />
        </Pressable>
       
        <Text style={[styles.hiddenText, { opacity: 0 }]}>{storyTitle}</Text>

        <Pressable onPress={() => navigation.navigate('Home')}>
            <AntDesign name='home' size={28} color={Colors.primary_gold}/>  
        </Pressable>
        
    </View> 
    <View style={styles.container}>
       
      <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Pearl Harbor Attacks</Text>
        </View>
        {fullStory.map((paragraph, index) => (
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