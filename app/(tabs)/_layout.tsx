import ProfileDrawer from "@/components/drawer/Drawer";
import { Drawer } from "expo-router/drawer";
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const HomeDrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer 
            drawerContent={()=> <ProfileDrawer/>}
            screenOptions={{
                headerShown:false,
                drawerType:"slide",
                drawerStyle:{width:"90%", },
                overlayColor: "rgba(0,0,0,0.7)"
            }}
        >
            <Drawer.Screen 
                name="(home)" 
                options={{drawerLabel:"Home"}}
            />
        </Drawer>
    </GestureHandlerRootView>
  )
}

export default HomeDrawerLayout