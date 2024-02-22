import { Button, StyleSheet, Text, View, button } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
//import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const LandingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>LandingScreen</Text>
      {/* <SkeletonPlaceholder borderRadius={4}>

      <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
        <SkeletonPlaceholder.Item width={60} height={60} borderRadius={50} />
        <SkeletonPlaceholder.Item marginLeft={20}>
          <SkeletonPlaceholder.Item width={120} height={20} />
          <SkeletonPlaceholder.Item marginTop={6} width={80} height={20} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>

      </SkeletonPlaceholder> */}
      <Button
        title='Continent Screen'
        onPress={() => navigation.push("Continent")}
      ></Button>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.off_white,
  },
});
