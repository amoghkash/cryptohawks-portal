// Returns Login Info
async function loginUser(credentials) {
    const loginData= await getUserLoginData(credentials)
    //console.log(loginData)
    return loginData
}

// Fetches data from API 
async function getUserLoginData(credentials) {
    const res = JSON.stringify(credentials)
    return fetch('http://localhost:8080/user/login', {
      method: 'POST',
      body: res,
      credentials: 'include', // Necessary to Save COokies
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(data => data.json())
}



export default loginUser