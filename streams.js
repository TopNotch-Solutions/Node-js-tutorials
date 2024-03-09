const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

readStream.on('data', (chunk) =>{
    console.log('-----NEW CHUNK------');
    console.log(chunk);
    writeStream.write('--------NEW CHUNK COMING IN----------');
    writeStream.write(chunk);
});

readStream.pipe(writeStream); // only when you are doing direct read write