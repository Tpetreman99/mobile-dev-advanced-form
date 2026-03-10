import { Link } from "expo-router";
import { Text, View, StyleSheet, ImageBackground } from "react-native";

export default function Index() {
  return (
    <ImageBackground
      source={require("../../assets/images/landingpage.avif")}
      style={s.backgroundimage} >
      <View style={s.screenSpaceing}>
        <Text style={s.header}>Welcome</Text>
          <Link href={"/employee_form"} style={s.button}>
            Employee Form
          </Link>
          <Link href={"/sign-in"} style={s.button}>
            Sign-in
          </Link>
          <Link href={"/sign-up"} style={s.button}>
            Sign-up
          </Link>
      </View>
    </ImageBackground>
  );
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
