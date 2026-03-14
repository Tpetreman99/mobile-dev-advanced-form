import { Link } from "expo-router";
import { Text, View, StyleSheet, ImageBackground } from "react-native";

export default function Index() {
  return (
    <ImageBackground
      source={require("../../assets/images/landingpage.avif")}
      style={s.backgroundImage}
      resizeMode="cover"
    >
      <View style={s.overlay}>
        <View style={s.topBar}>
          <Text style={s.topText}>← HOME</Text>
          <Text style={s.topText}>FORM NAVIGATION</Text>
        </View>

        <Text style={s.heading}>Welcome</Text>

        <Text style={s.introText}>
          Choose one of the available forms below. Each screen includes
          validation, clear feedback, and a consistent interface design.
        </Text>

        <View style={s.linkGroup}>
          <Link href="/employee_form" style={s.linkButton}>
            Employee Form
          </Link>

          <Link href="/sign-in" style={s.linkButton}>
            Sign In
          </Link>

          <Link href="/sign-up" style={s.linkButton}>
            Sign Up
          </Link>
        </View>
      </View>
    </ImageBackground>
  );
}

const s = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.82)",
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 32,
  },

  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 28,
  },

  topText: {
    fontSize: 12,
    color: "#050206",
    fontWeight: "600",
    letterSpacing: 0.5,
  },

  heading: {
    fontSize: 46,
    fontWeight: "700",
    color: "#050206",
    marginBottom: 14,
  },

  introText: {
    fontSize: 14,
    color: "#3B3B3B",
    lineHeight: 22,
    marginBottom: 34,
    maxWidth: "95%",
  },

  linkGroup: {
    gap: 16,
  },

  linkButton: {
    borderBottomWidth: 1,
    borderBottomColor: "#D8D2CD",
    paddingVertical: 14,
    fontSize: 20,
    color: "#050206",
    fontWeight: "600",
  },
});
