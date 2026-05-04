import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login(){
    return(
        <SafeAreaView>
            <View className="flex-1 bg-background">
                <Text>Login Page</Text>
            </View>
        </SafeAreaView>
    )
}