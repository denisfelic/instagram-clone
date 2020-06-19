import React, { Fragment, useState } from 'react';
import { Text, FlatList, View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import deviceDimensions from '../../../../config/DeviceDimensions';
import getCurrentDate from '../../../../api/currentDate';


const Comments = ({ comments }: any) => {
    

    const [currentComments, setCurrentComments] = useState(comments)

    let contentOfTextInput: any;
    let inputCommentText = '';
    let currentDate = getCurrentDate();


    function sendNewComment() {
        const newComment = {
            date: currentDate,
            text: inputCommentText,
            userName: "Denoca"
        }
        setCurrentComments([...currentComments, newComment]);   // Old comments + new comment, this is destruction syntax of an array
        contentOfTextInput.clear();   

    }

    return (
        <Fragment>
            <FlatList
                data={currentComments}
                renderItem={({ item }) => (
                    <View>
                        <View style={style.commentNameData}>
                            <Text>{item.userName}</Text>
                            <Text>{item.date}</Text>
                        </View>
                        <Text>{item.text}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
            <View style={style.inputAndIconContainer}>
                <TextInput
                    ref={textInput => contentOfTextInput = textInput}
                    style={style.commentInput}
                    placeholder={'Enter with your comment here.'}
                    onChangeText={text => { inputCommentText = text }}
                />
                <TouchableOpacity
                    onPress={() => sendNewComment()}
                >
                    <Image
                        style={style.sendImageIcon}
                        source={require('../../../../assets/img/sendMessage.png')}
                    />
                </TouchableOpacity>
            </View>
        </Fragment>
    );
}



const style = StyleSheet.create({
    commentContainer: {
        flexDirection: 'row'
    },
    commentNameData: {
        flexDirection: 'row',
        width: deviceDimensions.width,
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 1,
    },
    inputAndIconContainer: {
        flexDirection: 'row',
    },
    commentInput: {
        borderColor: '#111',
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1

    },
    sendImageIcon: {
        width: deviceDimensions.width / 9,
        height: deviceDimensions.height / (9 * 2),
    }
})

export default Comments;