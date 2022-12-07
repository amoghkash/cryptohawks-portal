import { Cookies } from 'react-cookie'


async function getUserData(credentials) {
    const cookies = new Cookies();
    let token = cookies.get('token')
    if(token) {
        let requestUrl = 'http://localhost:8080/user/?token='+token
        return fetch(requestUrl, {
            method: 'GET',
            body: res,
             //credentials: 'include', // Necessary to Save COokies
            headers: {
            }
          })
            .then(data => data.json())
    }
}

