import React from "react";
import { SafeAreaView, Text } from 'react-native';

type WelcomeProps = {
    name: string,
    age: number,
    gender: boolean
}

const Welcome = (props: WelcomeProps) => {
    return (
        <SafeAreaView>
            <Text>Name: {props.name}</Text>
            <Text>Age: {props.age}</Text>
            <Text>Gender: {props.gender ? 'Male' : 'Female'}</Text>
        </SafeAreaView>
    )
}

export default Welcome;