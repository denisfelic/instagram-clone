function getCurrentDate() {
    if ((new Date().getUTCMonth() + 1) < 9)
        return `${new Date().getUTCDate()}/0${new Date().getUTCMonth() + 1}/${new Date().getFullYear()}`;
    else {
        return `${new Date().getUTCDate()}/${new Date().getUTCMonth() + 1}/${new Date().getFullYear()}`;
    }
}
export default getCurrentDate