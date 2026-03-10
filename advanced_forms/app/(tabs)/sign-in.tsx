import { Text } from "@react-navigation/elements"
import { ImageBackground , StyleSheet, View} from "react-native"



export default function SignIn() {
  return (
    <ImageBackground
          source={require("../../assets/images/pale-wall-texture.jpg")}
          style={s.backgroundimage} >
            <View>
              <Text>Sign-in</Text>
            </View>
          </ImageBackground>
  )
}

const s = StyleSheet.create({

  button: {
    fontSize: 25,
    color: '#FFFFFF',
    margin: 10,
    padding: 5
  },

  header: {
    fontSize: 60,
    color: '#3B3B3B',
    marginTop: 100,
    marginBottom: 300,
  },

  screenSpaceing: {
      flex: 1,
      alignItems: "center",
  },

  backgroundimage: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",

  }

});
