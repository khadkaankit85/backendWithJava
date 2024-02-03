//we need to make json type to module.
//because import statement cannot be used outside of a module
//fs promise is like better version of previous fs which return promises
import fs from "fs/promises" 

let a = await fs.readFile("Angkit2.txt")
console.log("file reading successful")

let b=await fs.appendFile("Angkit2.txt","\nAnkit khadka is appending this with await function")

//these function above returns a promise