import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown:false,        
        tabBarActiveTintColor: '#050206',
        tabBarInactiveTintColor: '#3B3B3B',

        //bottom navigation bar styling
        tabBarStyle: {
          borderTopWidth: 0,
          height: 77,
          paddingBottom: 30,
          paddingTop: 12,
        },

        tabBarLabelStyle: {
          fontSize: 11,
          marginTop: 6,
          paddingBottom: 4,
        },

        //bottom navigation bar component placement
        tabBarItemStyle: {
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
          <Ionicons name={focused ? "briefcase" : "briefcase-outline"} size={30}/>
        )
      }}/>

      <Tabs.Screen 
      name="sign-in" 
      options={{title: 'Sign-in',
        tabBarIcon: ({focused}) => (
          <Ionicons name={focused ? "person-circle" : "person-circle-outline"} size={30}/>
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