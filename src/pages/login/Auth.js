
// Returns Token
async function loginUser(credentials) {
    const loginData= await getUserLoginData(credentials)
    if(validateLoginData(loginData)){
        return loginData
    }
}

// Fetches token from API 
async function getUserLoginData(credentials) {
    console.log(JSON.stringify(credentials))
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(data => data.json())
}

// Checks Valid Property of Response
function validateLoginData(responseData) {
    return(responseData.valid)
}



export default loginUser