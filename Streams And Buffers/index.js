const buffer = new Buffer.from('How are you?');


console.log(buffer)
console.log(buffer.toString());
console.log(buffer.toJSON());
console.log(buffer.length);

buffer.write('I am Good Boy',0,12);
console.log(buffer)
console.log(buffer.toString());