// Get API Version
export async function getAPIVersion() {
    let requestUrl = 'https://cryptohawks-api-testing-ueanhy6e5q-uk.a.run.app/version'
    return fetch(requestUrl, {
        method: 'GET',
        credentials: 'include', // Necessary to Save COokies
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(data => data.json())
        .catch((error) => {
        })
}
