import * as readLine from 'readline-sync'
import fetch from 'node-fetch'

interface URLAPIResponse{
    result_url: String
}

const MAIN_OPTION=[
    "Short an URL",
    "Exit"
]

const askURL = async()=>{
    while(true){
        const answer=readLine.question("Introduce a valid URL to be shorten: ")
        return answer
        /*
        if(await urlExist(answer)){
            
        }else{
            console.log("Not a valid URL")
        }
        */
    }
}

const shortUrl=async(url:string)=>{
    const enodedParamaters=new URLSearchParams()
    enodedParamaters.append('url',url)
    const response: fetch.Response=await fetch('https://url-shortener-service.p.rapidapi.com/shorten',{
        method: "POST",
        headers:{
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com',
            'X-RapidAPI-Key': process.env.API_KEY as string    
        },
        body: enodedParamaters
    })
    //console.log(response)
    const json:URLAPIResponse=(await response.json()) as URLAPIResponse
    return json.result_url===null? "Not a valid URL": json.result_url
}

const askMainOptions=()=>{
    let selectedOption: number=0
    while(selectedOption<1 || selectedOption>MAIN_OPTION.length){
        MAIN_OPTION.map((v,i)=>{
            console.log(`${i+1} - ${v}`)
        })
        selectedOption=readLine.questionInt("Introduce a valid option: ")
    }
    return selectedOption
    
}




export{askURL,shortUrl,askMainOptions}

