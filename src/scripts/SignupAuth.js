// Returns Signup Info
async function signupUser(credentials) {
    const signupData= await registerUser(credentials)
    return signupData
}

// Fetches data from API 
async function registerUser(credentials) {
    const res = JSON.stringify(credentials)
    console.log(res)
    return fetch('https://cryptohawks-api-testing-ueanhy6e5q-uk.a.run.app/user/signup', {
      method: 'POST',
      body: res,
      credentials: 'include', // Necessary to Save COokies
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(data => data.json())
}



export default signupUser