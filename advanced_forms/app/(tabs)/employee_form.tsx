import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Alert,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "expo-router";

const EmployeeSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Full name must be at least 2 characters")
    .required("Full name is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  employeeId: Yup.string()
    .min(4, "Employee ID must be at least 4 characters")
    .max(10, "Employee ID must be at most 10 characters")
    .required("Employee ID is required"),
  department: Yup.string()
    .min(2, "Department must be at least 2 characters")
    .required("Department is required"),
});

type FieldName =
  | "fullName"
  | "email"
  | "phone"
  | "employeeId"
  | "department";

export default function EmployeeFormScreen() {
  const router = useRouter();
  const [focusedField, setFocusedField] = useState<FieldName | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            phone: "",
            employeeId: "",
            department: "",
          }}
          validationSchema={EmployeeSchema}
          onSubmit={(values, { resetForm }) => {
            console.log("Employee Form Submitted:", values);
            Alert.alert("Success", "Employee information submitted successfully.");
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
              <View style={styles.topBar}>
                <Pressable onPress={() => router.back()}>
                  <Text style={styles.backText}>← BACK</Text>
                </Pressable>
                <Text style={styles.menuText}>EMPLOYEE FORM</Text>
              </View>

              <Text style={styles.heading}>Employee Information</Text>

              <Text style={styles.introText}>
                Please complete the employee information form below. All fields
                are required before submission.
              </Text>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Full Name</Text>
                <TextInput
                  style={[
                    styles.input,
                    focusedField === "fullName" && styles.inputFocused,
                    touched.fullName && errors.fullName && styles.inputError,
                  ]}
                  placeholder="Enter full name"
                  placeholderTextColor="#9A8174"
                  value={values.fullName}
                  onChangeText={handleChange("fullName")}
                  onBlur={(e) => {
                    handleBlur("fullName")(e);
                    setFocusedField(null);
                  }}
                  onFocus={() => setFocusedField("fullName")}
                />
                {touched.fullName && errors.fullName && (
                  <Text style={styles.errorText}>{errors.fullName}</Text>
                )}
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={[
                    styles.input,
                    focusedField === "email" && styles.inputFocused,
                    touched.email && errors.email && styles.inputError,
                  ]}
                  placeholder="Enter email"
                  placeholderTextColor="#9A8174"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={(e) => {
                    handleBlur("email")(e);
                    setFocusedField(null);
                  }}
                  onFocus={() => setFocusedField("email")}
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                  style={[
                    styles.input,
                    focusedField === "phone" && styles.inputFocused,
                    touched.phone && errors.phone && styles.inputError,
                  ]}
                  placeholder="Enter 10-digit phone number"
                  placeholderTextColor="#9A8174"
                  keyboardType="number-pad"
                  value={values.phone}
                  onChangeText={handleChange("phone")}
                  onBlur={(e) => {
                    handleBlur("phone")(e);
                    setFocusedField(null);
                  }}
                  onFocus={() => setFocusedField("phone")}
                />
                {touched.phone && errors.phone && (
                  <Text style={styles.errorText}>{errors.phone}</Text>
                )}
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Employee ID</Text>
                <TextInput
                  style={[
                    styles.input,
                    focusedField === "employeeId" && styles.inputFocused,
                    touched.employeeId && errors.employeeId && styles.inputError,
                  ]}
                  placeholder="Enter employee ID"
                  placeholderTextColor="#9A8174"
                  value={values.employeeId}
                  onChangeText={handleChange("employeeId")}
                  onBlur={(e) => {
                    handleBlur("employeeId")(e);
                    setFocusedField(null);
                  }}
                  onFocus={() => setFocusedField("employeeId")}
                />
                {touched.employeeId && errors.employeeId && (
                  <Text style={styles.errorText}>{errors.employeeId}</Text>
                )}
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Department</Text>
                <TextInput
                  style={[
                    styles.input,
                    focusedField === "department" && styles.inputFocused,
                    touched.department && errors.department && styles.inputError,
                  ]}
                  placeholder="Enter department"
                  placeholderTextColor="#9A8174"
                  value={values.department}
                  onChangeText={handleChange("department")}
                  onBlur={(e) => {
                    handleBlur("department")(e);
                    setFocusedField(null);
                  }}
                  onFocus={() => setFocusedField("department")}
                />
                {touched.department && errors.department && (
                  <Text style={styles.errorText}>{errors.department}</Text>
                )}
              </View>

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
  );
}

const styles = StyleSheet.create({
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
  heading: {
    fontSize: 36,
    fontWeight: "700",
    color: "#050206",
    marginBottom: 12,
  },
  introText: {
    fontSize: 14,
    color: "#3B3B3B",
    lineHeight: 22,
    marginBottom: 30,
    maxWidth: "95%",
  },
  formGroup: {
    marginBottom: 22,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#050206",
    marginBottom: 8,
    letterSpacing: 0.3,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#D8D2CD",
    paddingVertical: 12,
    fontSize: 16,
    color: "#050206",
    backgroundColor: "#FFFFFF",
  },
  inputFocused: {
    borderBottomColor: "#9A8174",
    borderBottomWidth: 2,
  },
  inputError: {
    borderBottomColor: "#B00020",
  },
  errorText: {
    marginTop: 6,
    color: "#B00020",
    fontSize: 12,
  },
  submitButton: {
    marginTop: 28,
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
