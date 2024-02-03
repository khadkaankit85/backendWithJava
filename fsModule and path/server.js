// to use require statement, the type in package.json should be type:default, it shouldn't be of module type
// using type:module is more convinent as i can use import statement with similar syntax to python 
const fs= require("fs")
// console.log(fs)
console.log("Initiating")

// fs.writeFileSync('Angkit.txt',"Angkit is a good boy")
//write file sync writes block code so programs below will not execute until sync function is done executing.
// console.log("Success")


//this is called callback hell because if we keep using multiple callbacks, its not gonna be readable.
// fs.writeFile("Angkit2.txt", "This is being written with writeFile function",()=>{
//         fs.appendFile("Angkit2.txt","\nAppending with first callback",()=>{
            
//             fs.appendFile("Angkit2.txt","\nAppending twice",()=>{
//                 console.log("double appending success")
//             })
//         })
// })


// this function below is used to read files
// fs.readFile("Angkit2.txt",(e,d)=>{
//     console.log(d.toString())
// })