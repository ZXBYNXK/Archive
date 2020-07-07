
// Fetch test


// Get all messages.
const getAllMessages = () => {
    const url = '/api/messages/getallmessages';
    fetch(url)
        .then(response => {
           return response.json()
        })
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
}

// Get a specific message.

const getSpecificMessages = () => {
    const username = document.getElementById("userName").value;
    const url2 = `/api/messages/${username}`

    fetch(url2)
        .then(response => {
            return response.json()
        })
        .then( response => {
            console.log(response)
        })
        .catch(err => {
            console.log("Message not found")
        })
}



// Create message

const createMessage = () => {
    const message = {
        userName: document.getElementById("userNamePost").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
        }
    const url3 = '/api/messages'
    fetch(url3, 
        {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(message)
    })
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.log(err)
    })
}



// Update message

const updateMessage = () => {
    const updatedMessage = {
        userName: document.getElementById("userName").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value    
    }
    const id = document.getElementById("id").value;
    const url4 = `/api/messages/${id}`

    fetch(url4, 
    {
        method: "PUT",
        headers: 
            {
                Accept: 'application/json',
                'Content-type': 'application/json'
            },
        body: JSON.stringify(updatedMessage)            
    })
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.log(err)
    })

}


// Delete message 

const deleteMessage = () => {
    const id = document.getElementById("id").value;
    const url5 = `/api/messages/${id}`

    fetch(url5, 
    {
        method: "DELETE"           
    })
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.log(err)
    })}