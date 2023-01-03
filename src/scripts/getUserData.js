import { Cookies } from 'react-cookie'


export async function getUserData() {
    const cookies = new Cookies();
    let token = cookies.get('token')
    if(token) {
        let requestUrl = 'http://localhost:8080/user/?token='+token
        return fetch(requestUrl, {
            method: 'GET',
            credentials: 'include', // Necessary to Save COokies
            headers: {
            }
          })
            .then(data => data.json())
    }
}

export async function getAllUser() {
    let requestUrl = 'http://localhost:8080/user/all'
    return fetch(requestUrl, {
        method: 'GET',
        credentials: 'include', // Necessary to Save COokies
        headers: {
        }
        })
        .then(data => data.json())
}