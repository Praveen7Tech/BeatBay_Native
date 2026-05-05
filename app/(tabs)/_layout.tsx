import { Tabs } from "expo-router";
import { tabs } from "../constants/data";

export default function HomeLayout(){
    return(
        <Tabs screenOptions={{
            headerShown:false,
            tabBarActiveTintColor: "#FFFFFF",
            tabBarInactiveTintColor:"#B3B3B3",
            tabBarStyle:{
                backgroundColor: "rgba(0, 0, 0, 0.85",
                position: "absolute", //allow content to scroll behind bar
                borderTopWidth:0,
                elevation:0,
            },
            tabBarLabelStyle:{
                fontFamily: "sans-semibold"
            }
        }}>
           {tabs.map((tab)=>(
            <Tabs.Screen 
                key={tab.name}
                name={tab.name}
                options={{
                    title: tab.title,
                    tabBarIcon: ({color, focused})=> (
                        <tab.icon 
                            size={26} 
                            strokeWidth={focused ? 2.5 : 2} 
                            color={color}
                            //fill={focused ? color : "none"}
                        />
                    )
                }}
            />
           ))}
            
        </Tabs>
    )
}