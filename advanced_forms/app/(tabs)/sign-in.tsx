import React from "react";
import { SafeAreaView, ImageBackground, ScrollView, StyleSheet, Text, TextInput, View, Pressable} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "expo-router";

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(5, "Password doesn't meet 5 character minimum")
    .required("Password is required"),
  confirmPassword: Yup.string()
  .oneOf([Yup.ref("password")], "Passwords must match")
  .required("Please confirm your password"),
});

export default function SignIn() {
  const router = useRouter();
  return (
    <ImageBackground
          source={require("../../assets/images/landingpage.avif")}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
    <View style={styles.overlay}>
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* validation setup */}
        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={SignInSchema}
          onSubmit={(values, { resetForm }) => {
            console.log("New user created with these credentials:", values);
            resetForm();
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <>  
              {/* main header text area */}
              <View style={styles.topBar}>
                <Pressable onPress={() => router.back()}>
                  <Text style={styles.backText}>← BACK</Text>
                </Pressable>
                <Text style={styles.menuText}>Sign-In</Text>
              </View>

              <Text style={styles.heading}>Sign-in</Text>

              <Text style={styles.introText}>
                To sign in fill out the fields bellow. All fields are
                required and must meet the validation rules before submission.
              </Text>
                {/* email field */}
              <View style={styles.formGroup}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter email"
                  placeholderTextColor="#9A8174"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
              </View>
                {/* password field */}
              <View style={styles.formGroup}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter password (minimum 5 characters)"
                  placeholderTextColor="#9A8174"
                  secureTextEntry
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                />
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
              </View>
                {/* password field */}
              <View style={styles.formGroup}>
                <Text style={styles.label}>Confirm Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Confirm password"
                  placeholderTextColor="#9A8174"
                  secureTextEntry
                  value={values.confirmPassword}
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                )}
              </View>
              {/* submit button */}
              <Pressable
                style={[
                  styles.submitButton,
                  !isValid && styles.submitButtonDisabled,
                ]}
                onPress={() => handleSubmit()}
                disabled={!isValid}
              >
                <Text style={styles.submitText}>SUBMIT</Text>
              </Pressable>
            </>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 40,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 28,
  },

  backText: {
    fontSize: 12,
    color: "#050206",
    fontWeight: "600",
    letterSpacing: 0.5,
  },

  menuText: {
    fontSize: 12,
    color: "#050206",
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  heading: {
    fontSize: 40,
    fontWeight: "700",
    color: "#050206",
    marginBottom: 12,
  },
  introText: {
    fontSize: 14,
    color: "#3B3B3B",
    lineHeight: 22,
    marginBottom: 28,
    maxWidth: "95%",
  },
  formGroup: {
    marginBottom: 22,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#050206",
    marginBottom: 8,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#D8D2CD",
    paddingVertical: 10,
    fontSize: 16,
    color: "#050206",
  },
  errorText: {
    marginTop: 6,
    color: "#B00020",
    fontSize: 12,
  },
  submitButton: {
    marginTop: 24,
    backgroundColor: "#9A8174",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
  },
  submitButtonDisabled: {
    backgroundColor: "#9A8174",
    opacity: 0.5,
  },
  submitText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "#FFFFFFCC",
  },
});
