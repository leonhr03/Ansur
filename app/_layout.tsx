import {Stack, Tabs} from 'expo-router';
import 'react-native-reanimated';


export default function RootLayout() {


  // @ts-ignore
    // @ts-ignore
    return (
       <Tabs screenOptions={{
           headerShown: false,
           tabBarStyle: {
               borderRadius: 15,

           }
       }}>
           <Tabs.Screen name={"account"}/>
           <Tabs.Screen name={"home"}/>
           <Tabs.Screen name={"survey"}/>
       </Tabs>
  );
}

// @ts-ignore

