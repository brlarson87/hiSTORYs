import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useScrollViewOffset,
  useAnimatedRef,
  withTiming,
} from "react-native-reanimated";
import Colors from "../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { fetchStoryById } from "../firebase/firebase";

const windowWidth = Dimensions.get("window").width;

const FullStory = ({ navigation, route }) => {
  const [fullStory, setFullStory] = useState();
  const [isLoading, setIsLoading] = useState(true);

  /// ANIMATED
  const animatedRef = useAnimatedRef();
  const offset = useScrollViewOffset(animatedRef);

  const animatedTitleStyle = useAnimatedStyle(() => {
    return {
      opacity:
        Math.round(offset.value) > 80 ? Math.round(offset.value) / 150 : 0,
    };
  });
  ///

  const { storyId, title, collectionName } = route.params;

  useEffect(() => {
    const fetchStory = async () => {
      const docSnap = await fetchStoryById(collectionName, storyId);
      setFullStory(docSnap.fullStory);
      setIsLoading(false);
    };

    fetchStory();
  }, []);

  let StoryContent;

  if (isLoading && !fullStory) {
    StoryContent = (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator
          size='large'
          color={Colors.primary_gold}
          style={{ marginTop: 40 }}
        />
      </View>
    );
  } else {
    StoryContent = fullStory.map((paragraph, index) => (
      <View style={styles.paragraphContainer} key={index}>
        <Text style={styles.paragraph}>{paragraph}</Text>
      </View>
    ));
  }

  return (
    <>
      <Animated.View style={[styles.opacityHeader]}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name='back' size={28} color={Colors.primary_gold} />
        </Pressable>

        <Animated.View style={[animatedTitleStyle]}>
          <Text style={[styles.hiddenText]}>Pearl Harbor Attacks</Text>
        </Animated.View>

        <Pressable onPress={() => navigation.navigate("Home")}>
          <AntDesign name='home' size={28} color={Colors.primary_gold} />
        </Pressable>
      </Animated.View>
      <View style={styles.container}>
        <Animated.ScrollView
          ref={animatedRef}
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
          {StoryContent}
        </Animated.ScrollView>
      </View>
    </>
  );
};

export default FullStory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.off_white,
  },
  opacityHeader: {
    position: "absolute",
    top: 0,
    height: 90,
    width: "100%",
    backgroundColor: Colors.off_white,
    zIndex: 5,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
  hiddenText: {
    fontSize: 18,
    color: Colors.primary_gold,
  },
  scrollView: {
    width: windowWidth,
    paddingBottom: 170,
    marginTop: 135,
  },
  titleContainer: {
    padding: 30,
  },
  title: {
    fontSize: 27,
    fontFamily: "Fredoka-Regular",
    textDecorationLine: "underline",
    color: Colors.primary_gold,
  },
  paragraphContainer: {
    backgroundColor: "#FEFCEE",
    marginHorizontal: 12,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 6, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 10,
  },
  paragraph: {
    fontFamily: "Fredoka-Regular",
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 10,
    lineHeight: 30,
    letterSpacing: 1.1,
  },
});
