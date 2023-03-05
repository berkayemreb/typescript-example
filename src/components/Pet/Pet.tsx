import React from 'react';
import { SafeAreaView, Text } from 'react-native';

type PetProps = {
    petName: {
        firstname: string,
        lastname: string,
    },
    type: string
}

const Pet = (props: PetProps) => {

    const { firstname, lastname } = props.petName;
    const { type } = props;

    return (
        <SafeAreaView>
            <Text>You own a pet name {firstname} {lastname}</Text>
            <Text>The pet is a {type}</Text>
        </SafeAreaView>
    )
}

export default Pet;