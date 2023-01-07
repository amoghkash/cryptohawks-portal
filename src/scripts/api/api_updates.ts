export async function makeUpdate(updateData: any) {
    let requestUrl = 'https://cryptohawks-api-testing-ueanhy6e5q-uk.a.run.app/update'
    const req = JSON.stringify(updateData)
    return fetch(requestUrl, {
        method: 'POST',
        body: req,
        credentials: 'include', // Necessary to Save COokies
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(data => data.json())
}

export async function getUpdates() {
    // TO DO: Implement get All Tasks
    let data = await data_getUpdates()
    //console.log(data) // For Debug
    let returnArray = []
    for(var i in data){
        returnArray.unshift(data[i])
    }
    console.log(returnArray) // For Debug
    return(returnArray)
}


async function data_getUpdates() {
    let requestUrl = 'https://cryptohawks-api-testing-ueanhy6e5q-uk.a.run.app/update'
    return fetch(requestUrl, {
        method: 'GET',
        credentials: 'include', // Necessary to Save COokies
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(data => data.json())
}