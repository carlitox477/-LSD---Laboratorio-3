import { askMainOptions,askURL, shortUrl } from "./ClientUtils";
import * as dotenv from 'dotenv'

dotenv.config()

const main=async ()=>{
    console.log("Welcome to client UI")
    while(true){
        const selectedOption: number=askMainOptions()
        if (selectedOption!=1){
            return
        }
        const urlToBeShorted=await askURL()
        const shortedURL=await shortUrl(urlToBeShorted)
        console.log(`Shorted URL: ${shortedURL===undefined? "Not a valid URL": shortedURL}`)

        
    }
}

main()
