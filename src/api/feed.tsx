// Get users Data from API
const loadUsers = async () => {
    const usersHTTP = await fetch('http://192.168.1.250:3030/feed');
    const usersJson = await usersHTTP.json();
    return usersJson;
}
const feed = {
    getUsers: loadUsers
}
export default feed