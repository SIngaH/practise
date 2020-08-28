function makeRequest(location){
    return new Promise((resolve, reject) =>{
        console.log(`Making Request To ${location}`)
        if(location === `Google`){
            resolve(`Google says hi`)
        }else{
            reject(`We can only talk to Google`)
        }
    })
}

function processRequest(response){
    return new Promise((resolve, reject) =>{
        console.log(`Processing response`)
        resolve(`Extra information + ${response}`)
    })
}

async function doWork(){
    try{
        const response = await makeRequest(`Google`)
        console.log(`Response Received`)
        const processResponse = await processRequest(response)
        console.log(processResponse)
    } catch(error){
        console.log(error);
    }
}
doWork()
/*
Synchronous basically means that you can only execute one thing at a time. 
Asynchronous means that you can execute multiple things at a time and you 
don't have to finish executing the current thing in order to move on to next one.
*/