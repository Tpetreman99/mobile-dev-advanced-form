import { Text } from "@react-navigation/elements"
import { ImageBackground , StyleSheet, View} from "react-native"


export default function EmployeeForm() {
  return (
    <ImageBackground
          source={require("../../assets/images/pale-wall-texture.jpg")}
          style={s.backgroundimage} >
            <View>
              <Text>Employee Information</Text>
            </View>
          </ImageBackground>
  )
}

const s = StyleSheet.create({

  backgroundimage: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  }

});