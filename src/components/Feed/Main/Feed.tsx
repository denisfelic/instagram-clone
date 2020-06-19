import React, { useState, useEffect } from 'react';
import { FlatList, } from 'react-native';
import { UserProfile } from '../Components/UserProfile';
import feedAPI from '../../../api/feed';

interface User {
    id: number,
    postDate: Date
    url: string,
    description: string
    allowComments: boolean,
    likes: number,
    comments: number,
    userId: number,
    userName: string,
    userURL: string,
    comentarios: []
}

const Feed = () => {

    // Set and load all users data from an API ( FEED )
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        (async () => {
            setUsers(await feedAPI.getUsers());
        }
        )()
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
