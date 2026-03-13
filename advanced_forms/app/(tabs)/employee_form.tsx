import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

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

export default function EmployeeFormScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
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
                <Text style={styles.backText}>← BACK</Text>
                <Text style={styles.menuText}>EMPLOYEE FORM</Text>
              </View>

              <Text style={styles.heading}>Employee Info</Text>

              <Text style={styles.introText}>
                Fill out the employee information form below. All fields are
                required and must meet the validation rules before submission.
              </Text>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Full Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter full name"
                  placeholderTextColor="#9A8174"
                  value={values.fullName}
                  onChangeText={handleChange("fullName")}
                  onBlur={handleBlur("fullName")}
                />
                {touched.fullName && errors.fullName && (
                  <Text style={styles.errorText}>{errors.fullName}</Text>
                )}
              </View>

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

              <View style={styles.formGroup}>
                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter 10-digit phone number"
                  placeholderTextColor="#9A8174"
                  keyboardType="number-pad"
                  value={values.phone}
                  onChangeText={handleChange("phone")}
                  onBlur={handleBlur("phone")}
                />
                {touched.phone && errors.phone && (
                  <Text style={styles.errorText}>{errors.phone}</Text>
                )}
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Employee ID</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter employee ID"
                  placeholderTextColor="#9A8174"
                  value={values.employeeId}
                  onChangeText={handleChange("employeeId")}
                  onBlur={handleBlur("employeeId")}
                />
                {touched.employeeId && errors.employeeId && (
                  <Text style={styles.errorText}>{errors.employeeId}</Text>
                )}
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Department</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter department"
                  placeholderTextColor="#9A8174"
                  value={values.department}
                  onChangeText={handleChange("department")}
                  onBlur={handleBlur("department")}
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
