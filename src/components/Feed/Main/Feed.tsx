import React from 'react';
import { Text, FlatList, Image, View } from 'react-native';



import { UserProfile } from '../Components/UserProfile';

const Header = ({ usersDB }: any) => {
    return (
        <FlatList
            data={usersDB}
            renderItem={({ item }) => <UserProfile user={item} />}
            keyExtractor={(item, index) => index.toString()}
        />

    );
}
export default Header;


