import { Link } from "expo-router";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function Index() {
  return (
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
  );
}

const s = StyleSheet.create({

  button: {
    fontSize: 25,
    borderRadius: 10,
    backgroundColor: '#9A8174',
    color: '#FFFFFF',
    margin: 10,
    padding: 5
  },

  header: {
    fontSize: 60,
    color: '#3B3B3B',
    marginBottom: 60,
  },

    screenSpaceing: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }

});
