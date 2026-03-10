import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTintColor: '050206',
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },

        tabBarActiveTintColor: '#050206',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
        },

        tabBarLabelStyle: {
          justifyContent: "center",
          alignItems: "center"
        }
      }}>
      <Tabs.Screen 
      name="index" 
      options={{title: 'Home',
        tabBarIcon: ({focused}) => (
          <Ionicons name={focused ? "home" :  "home-outline"} size={30}/>
        )
      }}/>

      <Tabs.Screen 
      name="employee_form" 
      options={{title: 'Employee',
        tabBarIcon: ({focused}) => (
          <Ionicons name={focused ? "person" : "person-outline"} size={30}/>
        )
      }}/>

      <Tabs.Screen 
      name="sign-in" 
      options={{title: 'Sign-in',
        tabBarIcon: ({focused}) => (
          <Ionicons name={focused ? "log-in" : "log-in-outline"} size={30}/>
        )
      }}/>
      <Tabs.Screen 
      name="sign-up" 
      options={{title: 'Sign-up',
        tabBarIcon: ({focused}) => (
          <Ionicons name={focused ? "person-add" : "person-add-outline"} size={30}/>
        )
      }}/>
    </Tabs>
  )
}