const fs = require('fs/promises');

 async function FileReader(){
     const data = await fs.readFile('file.txt', 'utf-8')
     console.log(data)
}
FileReader()
function readFile() {
   fs.readFile('file.txt', 'utf-8')
        .then(data => console.log(data))
        .catch(err => console.log(err))
}
readFile()




/*const fileContent = fs.readFileSync('file.txt')
console.log(fileContent)
console.log(fileContent.toString());

const fileContent1 = fs.readFileSync('file.txt','utf-8')
console.log(fileContent1);

fs.writeFileSync('file.txt', 'Hello World')
fs.writeFileSync('file.txt', ' this is a file written by sundaresh', {flag: 'a'})*/