import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import Colors from "../constants/Colors";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

import NorthAmerica from "../assets/img/North-America.png";
import Africa from "../assets/img/Africa.png";
import Asia from "../assets/img/Asia.png";
import SouthAmerica from "../assets/img/South-America.png";
import Europe from "../assets/img/Europe.png";
import Australia from "../assets/img/Australia.png";

const ContinentScreen = ({ navigation }) => {
  // Pass "<CONTINENT COLLECTION NAME>" to CountryScreen.js
  TODO: return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.rowWrap}>
        <Pressable
          style={styles.continentContainer}
          android_ripple={{ color: Colors.secondary_gold }}
          onPress={() => navigation.push("Country Pick")}
        >
          <Image
            source={NorthAmerica}
            style={styles.thumbnailImage}
            resizeMode='contain'
          />
        </Pressable>

        <Pressable
          style={styles.continentContainer}
          android_ripple={{ color: Colors.secondary_gold }}
          onPress={() => navigation.push("Country Pick")}
        >
          <Image
            source={Africa}
            style={styles.thumbnailImage}
            resizeMode='contain'
          />
        </Pressable>

        <Pressable
          style={styles.continentContainer}
          android_ripple={{ color: Colors.secondary_gold }}
          onPress={() => navigation.push("Country Pick")}
        >
          <Image
            source={Asia}
            style={styles.thumbnailImage}
            resizeMode='contain'
          />
        </Pressable>

        <Pressable
          style={styles.continentContainer}
          android_ripple={{ color: Colors.secondary_gold }}
          onPress={() => navigation.push("Country Pick")}
        >
          <Image
            source={SouthAmerica}
            style={styles.thumbnailImage}
            resizeMode='contain'
          />
        </Pressable>

        <Pressable
          style={styles.continentContainer}
          android_ripple={{ color: Colors.secondary_gold }}
          onPress={() => navigation.push("Country Pick")}
        >
          <Image
            source={Europe}
            style={styles.thumbnailImage}
            resizeMode='contain'
          />
        </Pressable>

        <Pressable
          style={styles.continentContainer}
          android_ripple={{ color: Colors.secondary_gold }}
          onPress={() => navigation.push("Country Pick")}
        >
          <Image
            source={Australia}
            style={styles.thumbnailImage}
            resizeMode='contain'
          />
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default ContinentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.off_white,
  },
  rowWrap: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  continentContainer: {
    width: windowWidth / 2 - 25,
    height: windowHeight / 3 - 62,
    // borderWidth: 1,
    // borderColor: Colors.primary_gold,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: "#FEFCEE",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 10,
  },
  thumbnailImage: { width: "90%", height: "92%" },
});
