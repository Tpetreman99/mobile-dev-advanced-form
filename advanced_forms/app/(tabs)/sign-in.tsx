import { Formik } from "formik";
import * as Yup from "yup";
import { StyleSheet, View, TextInput, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
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
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={SignInSchema}
      validateOnMount
      onSubmit={(values, { resetForm }) => {
        console.log("Logged in user with following credentials", values);
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
        <SafeAreaView style={[s.container, s.content]}>
          <View style={s.topBar}>
            <Pressable onPress={() => router.back()}>
              <Text style={s.backText}>← BACK</Text>
            </Pressable>
            <Text style={s.menuText}>Sign-In</Text>
          </View>

          <View>
            <Text style={s.header}>Sign-In</Text>
          </View>

          <View style={s.fieldGroup}>
            <View style={s.labelRow}>
              <Text style={s.label}>Email</Text>
              {touched.email && errors.email ? (
                <Text style={s.inlineError}>{errors.email}</Text>
              ) : null}
            </View>
            <TextInput
              style={s.input}
              placeholder="Enter your email"
              placeholderTextColor="#8A817A"
              keyboardType="email-address"
              autoCapitalize="none"
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
            />
          </View>

          <View style={s.fieldGroup}>
            <View style={s.labelRow}>
              <Text style={s.label}>Password</Text>
              {touched.password && errors.password ? (
                <Text style={s.inlineError}>{errors.password}</Text>
              ) : null}
            </View>
            <TextInput
              style={s.input}
              placeholder="Enter your password"
              placeholderTextColor="#8A817A"
              secureTextEntry
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
            />
          </View>
          <View style={s.fieldGroup}>
            <View style={s.labelRow}>
              <Text style={s.label}>Confirm Password</Text>
              {touched.confirmPassword && errors.confirmPassword ? (
                <Text style={s.inlineError}>{errors.confirmPassword}</Text>
              ) : null}
            </View>
            <TextInput
              style={s.input}
              placeholder="Confirm your password"
              placeholderTextColor="#8A817A"
              secureTextEntry
              value={values.confirmPassword}
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
            />
          </View>
          <Pressable
            style={[
              s.submitButton,
              !isValid && s.submitButtonDisabled,
            ]}
            onPress={() => handleSubmit()}
            disabled={!isValid}
          >
            <Text style={s.submitText}>SUBMIT</Text>
          </Pressable>
        </SafeAreaView>
      )}
    </Formik>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
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

  header: {
    fontSize: 28,
    color: "#050206",
    fontWeight: "700",
    marginBottom: 28,
  },

  fieldGroup: {
    marginBottom: 20,
  },

  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 6,
  },

  label: {
    fontSize: 14,
    color: "#050206",
    fontWeight: "600",
  },

  inlineError: {
    fontSize: 12,
    color: "#A35F5F",
    marginLeft: 8,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#D8D2CD",
    paddingVertical: 10,
    fontSize: 16,
    color: "#050206",
  },

  submitButton: {
    marginTop: 24,
    backgroundColor: "#050206",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
  },
  submitButtonDisabled: {
    backgroundColor: "#3B3B3B",
    opacity: 0.5,
  },
  submitText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 1,
  },
});
