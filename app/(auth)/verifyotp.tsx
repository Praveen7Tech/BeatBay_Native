import { useLocalSearchParams } from 'expo-router';
import { styled } from 'nativewind';
import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  NativeSyntheticEvent,
  Pressable,
  Text,
  TextInput,
  TextInputKeyPressEventData,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { useVerifyOtp } from '../hooks/useAuth'; // Ensure this path is correct

const SafeAreaView = styled(RNSafeAreaView);

const VerifyOtp = () => {
  const { email } = useLocalSearchParams<{ email: string }>()
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
  const [timer, setTimer] = useState<number>(30);
  const [serverError, setServerError] = useState<string | null>(null); // State for backend errors
  
  const inputs = useRef<(TextInput | null)[]>([]);
  const { mutate, isPending } = useVerifyOtp(); // Initialize mutation hook

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (text: string, index: number) => {
    setServerError(null); // Clear error when user types
    const newOtp = [...otp];
    newOtp[index] = text.slice(-1);
    setOtp(newOtp);
    
    if (text && index < otp.length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyBack = (e: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    setTimer(30);
    setServerError(null);
  };

  const onConfirm = () => {
    const otpCode = otp.join(""); 
    if (!email) {
      setServerError("Email is missing. Please sign up again.");
      return;
    }
    setServerError(null);

    mutate({email, otp: otpCode, }, {
      onError: (error) => {
        const msg = error.message 
        setServerError(msg);
      }
    });
  };

  return (
    <SafeAreaView className='flex-1 bg-[#121212]'>
      <View className='flex items-center pt-10 px-6'>      
        <Text className='text-white font-sans-bold text-2xl mb-2 text-center'>
          Enter verification code
        </Text>
        <Text className='text-gray-400 font-sans-light text-center'>
          We sent a 4-digit code to your email.
        </Text>      
      </View>

      {/* Backend Error Message */}
      {serverError && (
        <View className="mt-6 mx-16 bg-red-500/10 p-3 rounded-lg border border-red-500">
          <Text className="text-red-500 text-sm text-center font-sans-medium">
            {serverError}
          </Text>
        </View>
      )}

      {/* OTP Inputs Container */}
      <View className='flex-row items-center justify-between mt-10 mx-16'>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            ref={(el) => {
              if (el) inputs.current[index] = el;
            }}
            className={
              value
                ? "h-14 w-14 rounded-xl border border-primary bg-primary/10 text-2xl font-bold text-white"
                : "h-14 w-14 rounded-xl border border-inputborder bg-zinc-900 text-2xl font-bold text-white"
            }
            style={{textAlign:'center'}}
            keyboardType="number-pad"
            maxLength={1}
            value={value}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyBack(e, index)}
            selectionColor="#1DB954" 
          />
        ))}
      </View>

      {/* Timer Logic */}
      <View className='flex-row items-center justify-center mt-8 px-16'>
        {timer > 0 ? (
          <View className='flex-row'>
            <Text className='text-gray-400 font-sans-light'>Resend code in: </Text>
            <Text className='text-white font-sans-medium'>
              00:{timer < 10 ? `0${timer}` : timer}
            </Text>
          </View>
        ) : (
          <Pressable 
            onPress={handleResend}
            className='border border-inputborder rounded-full py-4 px-8 w-full items-center'
          >
            <Text className='text-white font-sans-semibold'>Resend code</Text>
          </Pressable>
        )}
      </View>

      {/* Submit Button */}
      <View className='px-14 mt-10'>
        <TouchableOpacity 
          onPress={onConfirm}
          activeOpacity={0.7}
          disabled={otp.some(digit => digit === "") || isPending}
          className={`p-4 rounded-full items-center ${
            otp.some(digit => digit === "") || isPending ? 'bg-gray-700' : 'bg-primary'
          }`}
        >
          {isPending ? (
            <ActivityIndicator color="black" />
          ) : (
            <Text className='text-black font-sans-bold text-lg'>Confirm</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default VerifyOtp;