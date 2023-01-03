// Login User

// Returns Login Info
export async function loginUser(credentials:any):Promise<JSON> {
    const loginData= await getUserLoginData(credentials)
    //console.log(loginData)
    return loginData
}

// Fetches data from API 
async function getUserLoginData(credentials:any):Promise<JSON> {
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

// Signup User
export async function signupUser(credentials:JSON): Promise<JSON> {
    const signupData= await registerUser(credentials)
    return signupData
}

// Fetches data from API 
async function registerUser(credentials:JSON):Promise<JSON> {
    const res = JSON.stringify(credentials)
    console.log(res)
    return fetch('http://localhost:8080/user/signup', {
      method: 'POST',
      body: res,
      credentials: 'include', // Necessary to Save COokies
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(data => data.json())
}