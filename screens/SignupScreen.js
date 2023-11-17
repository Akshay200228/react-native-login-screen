import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated';


export default function SignupScreen() {
    const navigation = useNavigation();
    return (
        <View className="w-full h-full bg-white">
            <StatusBar style="light" />
            <Image className="absolute w-full h-full" source={require('../assets/images/background.png')} />

            {/* lights */}
            <View className="absolute flex-row justify-around w-full">
                <Animated.Image
                    entering={FadeInUp.delay(200).duration(1000).springify()}
                    source={require('../assets/images/light.png')}
                    className="h-[225] w-[90]"
                />
                <Animated.Image
                    entering={FadeInUp.delay(400).duration(1000).springify()}
                    source={require('../assets/images/light.png')}
                    className="h-[160] w-[65] opacity-75"
                />
            </View>

            {/* title and form */}
            <View className="flex justify-around w-full h-full pt-48">

                {/* title */}
                <View className="flex items-center">
                    <Animated.Text
                        entering={FadeInUp.duration(1000).springify()}
                        className="text-5xl font-bold tracking-wider text-white">
                        Sign Up
                    </Animated.Text>
                </View>

                {/* form */}
                <View className="flex items-center mx-5 space-y-4">
                    <Animated.View
                        entering={FadeInDown.duration(1000).springify()}
                        className="w-full p-5 bg-black/5 rounded-2xl">
                        <TextInput
                            placeholder="Username"
                            placeholderTextColor={'gray'}
                        />
                    </Animated.View>
                    <Animated.View
                        entering={FadeInDown.delay(200).duration(1000).springify()}
                        className="w-full p-5 bg-black/5 rounded-2xl">
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor={'gray'}
                        />
                    </Animated.View>
                    <Animated.View
                        entering={FadeInDown.delay(400).duration(1000).springify()}
                        className="w-full p-5 mb-3 bg-black/5 rounded-2xl">
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor={'gray'}
                            secureTextEntry
                        />
                    </Animated.View>

                    <Animated.View className="w-full" entering={FadeInDown.delay(600).duration(1000).springify()}>
                        <TouchableOpacity className="w-full p-3 mb-3 bg-sky-400 rounded-2xl">
                            <Text className="text-xl font-bold text-center text-white">SignUp</Text>
                        </TouchableOpacity>
                    </Animated.View>

                    <Animated.View
                        entering={FadeInDown.delay(800).duration(1000).springify()}
                        className="flex-row justify-center">

                        <Text>Already have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.push('Login')}>
                            <Text className="text-sky-600">Login</Text>
                        </TouchableOpacity>

                    </Animated.View>
                </View>
            </View>
        </View>
    )
}