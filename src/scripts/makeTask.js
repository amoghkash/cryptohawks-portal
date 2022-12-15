

export default async function makeTask(taskData) {
    let requestUrl = 'https://cryptohawks-api-testing-ueanhy6e5q-uk.a.run.app/task'
    const req = JSON.stringify(taskData)
    return fetch(requestUrl, {
        method: 'POST',
        body: req,
        //credentials: 'include', // Necessary to Save COokies
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(data => data.json())
}
