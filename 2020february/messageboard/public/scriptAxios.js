

// POST -- CREATE MESSAGE
const createMessage = () => {
    const userName = document.getElementById("userNamePost").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const postUrl = '/api/messages/';
    axios.post(postUrl, {userName, email, message})
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.log(err)
    })
}


const getAllMessages = () => {
    const url = "/api/messages/getallmessages";
    axios.get(url)
    .then(response => {
        console.log(response.data)
    })
    .catch(err => {
        console.log(err)
    })
}

const updateMessage = () => {
    const id = document.getElementById("id").value;
    const url = `api/messages/${id}`;
    const message = document.getElementById("message").value;
    axios.put(url, {message: message})
    .then(result => {
        console.log(result)
    })
}


const getSpecificMessages = () => {
    const userName = document.getElementById("userName").value;

    const url2 = `/api/messages/${userName}`

    axios.get(url2)
    .then(user => {
        console.log(user)
    })
    .catch(err => {
        console.log(err)
    })
}


const deleteMessage = () => {
    const id = document.getElementById("id").value;
    const url = `api/messages/${id}`;
    axios.delete(url)
    .then(result => {
        console.log(result)
    })
}