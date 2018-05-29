import React from "react";
import OnBoardingScreen from "./OnBoardingScreen";
import { Text, View,Image } from "react-native";
import * as styles from "./css/FrontPages.js";
export default class FrontPages extends React.Component {
  render() {
    return (
      <OnBoardingScreen>
        <View style={styles.base}>
        <Image source={require('./img/home.jpg')} style={styles.backgroundImage} />
        <Text style={styles.text}>Hi</Text>
        </View>
        <View>
          <Text>Hi 12312</Text>
        </View>
      </OnBoardingScreen>
    );
  }
}
