// Returns Login Info
async function loginUser(credentials) {
    const loginData= await getUserLoginData(credentials)
    return loginData
}

// Fetches data from API 
async function getUserLoginData(credentials) {
    const res = JSON.stringify(credentials)
    return fetch('https://cryptohawks-api-testing-ueanhy6e5q-uk.a.run.app/user/login', {
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