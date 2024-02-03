import path from "path";
const myPath="C:\\xampp\\htdocs\\CSD112\\BackEndWebDevelopment\\fsModule>ankit.txt"
// this gives the extension of file
// console.log(path.extname(myPath))

//this gives the name of the directory
// console.log(path.dirname(myPath))

//this gives the basename
console.log(path.basename(myPath))


//we can join paths and use it easily
console.log(path.join("c:/","prgrams\\ankit.txt"))