// Get API Version
export async function getAPIVersion() {
    let requestUrl = 'http://localhost:8080/version'
    return fetch(requestUrl, {
        method: 'GET',
        credentials: 'include', // Necessary to Save COokies
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(data => data.json())
}
