// Likes Button Behaviors 

// On touchable button
function handleLikesButtonBehavior(likeState: boolean, setLikeStateCallBack: Function, likesAmount: number, setLikesAmountCallBack: Function) {
    setLikeStateCallBack(!likeState);
    if (!likeState) {
        setLikesAmountCallBack(likesAmount + 1);
    }
    else {
        setLikesAmountCallBack(likesAmount - 1);
    }
}

// On Image
function renderLikeButtonIcon(likeState: boolean) {
    if (likeState) {
        return require('../assets/img/like.png');
    }
    return require('../assets/img/unlike.png');
}


// On Text
function renderLikeAmountText(likesCount: number) {
    return likesCount + (likesCount > 1 ? ` likes` : ` like`);
}

// Exports
const handleLikes = {
    handleLikesButtonBehavior: handleLikesButtonBehavior,
    renderLikeButtonIcon: renderLikeButtonIcon,
    renderLikeAmountText: renderLikeAmountText,
}
export default handleLikes;