const path=require('node:path')


console.log(" ")
console.log(__filename);
console.log(__dirname);

console.log("");

console.log(path.basename(__filename))
console.log(path.basename(__dirname));

console.log("");

console.log(path.dirname(__filename))
console.log(path.dirname(__dirname))

console.log("");

console.log(path.extname(__filename));
console.log(path.extname(__dirname));

console.log("");

console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute(__dirname));

console.log("");


console.log(path.parse(__filename));
console.log(path.parse(__dirname));


console.log("");

console.log(path.format(path.parse(__filename)));
console.log(path.format(path.parse(__dirname)));


console.log("");

console.log(path.join("/folder1", "folder2", "index.html"));

console.log("");
console.log(path.resolve("folder1", "folder2", "index.html"));