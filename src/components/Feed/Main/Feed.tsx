import React, { useState, useEffect } from 'react';
import { Text, FlatList, Image, View } from 'react-native';



import { UserProfile } from '../Components/UserProfile';
import feedAPI from '../../../api/feed';

const Feed = () => {

    // Set and load all users data from an API ( FEED )
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function loadFeed() {
            setUsers(await feedAPI.getUsers());
        }
        loadFeed()
    }, []);
 

    return (
        <FlatList
            data={users}
            renderItem={({ item }) => <UserProfile user={item} />}
            keyExtractor={(item, index) => index.toString()}
        />

    );
}

export default Feed;

