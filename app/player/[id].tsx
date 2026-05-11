import { songs } from '@/constants/icons';
import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from 'expo-router';
import { Pause, Play, Repeat, Shuffle, SkipBack, SkipForward } from 'lucide-react-native';
import { styled } from 'nativewind';
import React, { useEffect, useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import ImageColors from 'react-native-image-colors';
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView)

const SongPlayer = () => {
  const { id } = useLocalSearchParams();
  const [bgColor, setBgColor] = useState("#121212");
  const [showLyrics, setShowLyrics] = useState(false);
  const playing = true;

  useEffect(() => {

    const getImageColors = async () => {
      try {
        const result = await ImageColors.getColors(Image.resolveAssetSource(songs.song3).uri,
          { fallback: "#121212", }
        );
        let color = "#121212";
        switch (result.platform) {
          case "android":
            color = result.dominant;
            break;
          case "ios":
            color = result.background;
            break;
          case "web":
            color = result.lightVibrant;
            break;
        }

        setBgColor(color);

      } catch (error) {
        console.log(error);
      }
    };

    getImageColors();

  }, []);

  return (
    <LinearGradient
      colors={[bgColor, "rgba(18, 18, 18, 0.9)", "#121212"]}
      locations={[0, 0.4, 0.6]} 
      className="flex-1"
    >
      <SafeAreaView className='flex-1'>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
        >
          {/* HEADER SECTION */}
          <View className='flex-row justify-between px-5 mt-6 items-center'>
            <Pressable onPress={() => router.back()}>
              <Ionicons name='chevron-down' size={26} color="white" />
            </Pressable>
            <View className="items-center">
              <Text className='text-white text-[10px] tracking-widest font-sans-semibold opacity-70'>PLAYING FROM SEARCH</Text>
              <Text className='text-white text-xs font-sans-bold'>Munbe va anbe va</Text>
            </View>
            <Pressable>
              <Ionicons name='ellipsis-horizontal' size={26} color="white" />
            </Pressable>
          </View>

          {/* IMAGE SECTION */}
          <View className='items-center px-5 mt-10'>
            <Image
              source={songs.song1}
              className='w-80 h-80 rounded-sm'
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 0.5,
                shadowRadius: 20,
              }}
            />
          </View>

          {/* SONG INFO SECTION */}
          <View className='w-full flex-row items-center justify-between mt-12 px-8'>
            <View className='flex-1'>
              <Text className='text-white text-2xl font-sans-extrabold'>Munbe va</Text>
              <Text className='text-zinc-400 text-lg font-sans-medium'>Sreya ghoshal</Text>
            </View>
            <Pressable>
              <Ionicons name='heart-outline' size={30} color="white" />
            </Pressable>
          </View>

          {/* SLIDER SECTION */}
          <View className="mt-8 px-5">
            <Slider
              style={{ width: '100%', height: 10 }}
              minimumTrackTintColor='#FFFFFF'
              maximumTrackTintColor='#FFFFFF33'
              thumbTintColor='white'
              value={50}
              maximumValue={100}
            />
            <View className='flex-row justify-between px-3 mt-2'>
              <Text className='text-zinc-400 font-sans-light text-[10px]'>1:30</Text>
              <Text className='text-zinc-400 font-sans-light text-[10px]'>4:20</Text>
            </View>
          </View>

          {/* ACTION BUTTONS (The Black Area) */}
          <View className='flex-row justify-between items-center px-8 mt-5'>
            <Shuffle size={22} color="#1DB954" />
            <Pressable>
              <SkipBack size={32} color="white" fill="white" />
            </Pressable>
            <Pressable className="w-16 h-16 bg-white rounded-full items-center justify-center shadow-lg">
              {playing ? <Pause size={30} color="black" fill="black" /> : <Play size={30} color="black" fill="black" className="ml-1" />}
            </Pressable>
            <Pressable>
              <SkipForward size={32} color="white" fill="white" />
            </Pressable>
            <Pressable>
              <Repeat size={22} color="rgba(255,255,255,0.5)" />
            </Pressable>
          </View>

          {/* LYRICS SECTION (Bright Version) */}
          <Pressable
            onPress={() => setShowLyrics(!showLyrics)}
            className="mx-6 mt-12 rounded-2xl shadow-xl overflow-hidden"
            style={{ backgroundColor: bgColor, borderBottomWidth: 0 }}
          >
            {/* Adding a subtle gradient overlay to the lyrics box to make it "glow" */}
            <LinearGradient
              colors={['rgba(255,255,255,0.15)', 'transparent']}
              className="p-5"
            >
              <Text className="text-white font-sans-bold text-lg mb-4">Lyrics</Text>
              <Text
                numberOfLines={showLyrics ? undefined : 4}
                className="text-white text-2xl font-sans-bold leading-9 tracking-tight"
                style={{ textShadowColor: 'rgba(0, 0, 0, 0.3)', textShadowOffset: { width: 0, height: 1 }, textShadowRadius: 4 }}
              >
                Everything I do, I do it for you. {"\n"}
                Look into my eyes, you will see. {"\n"}
                Search your heart, search your soul.{"\n"}
                And when you find me there, you&apos;ll search no more.
              </Text>
              <View className="flex-row justify-end mt-6">
                <View className="bg-black/20 px-5 py-2 rounded-full flex-row items-center">
                  <Text className="text-white font-sans-bold text-xs">MORE</Text>
                  <Ionicons name={showLyrics ? "chevron-up" : "expand"} size={14} color="white" style={{ marginLeft: 8 }} />
                </View>
              </View>
            </LinearGradient>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SongPlayer;