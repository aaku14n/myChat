import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
console.log(width, height);
export const styles = StyleSheet.create({
  // Button container
  base: {
    width,
    height
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
   
  },
  text: {
    position: "absolute",
    color: "#ffffff",
    top:50,
    left:0,
    zIndex:1
  }
});
