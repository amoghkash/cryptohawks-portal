import { Cookies } from 'react-cookie'

// Get User Data
export async function getUserData() {
    const cookies = new Cookies();
    let token = cookies.get('token')
    if(token) {
        let requestUrl = 'https://cryptohawks-api-testing-ueanhy6e5q-uk.a.run.app/user/?token='+token
        return fetch(requestUrl, {
            method: 'GET',
            credentials: 'include', // Necessary to Save COokies
            headers: {
            }
          })
            .then(data => data.json())
    }
}


// Get All User
export async function getAllUser() {
    let requestUrl = 'https://cryptohawks-api-testing-ueanhy6e5q-uk.a.run.app/user/all'
    return fetch(requestUrl, {
        method: 'GET',
        credentials: 'include', // Necessary to Save COokies
        headers: {
        }
        })
        .then(data => data.json())
}
