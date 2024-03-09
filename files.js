 const { error } = require('console');
const fs = require('fs'); // import the fs module that is responsible for creating/ interacting with files system

// //read
fs.readFile('./docs/blog1.txt',(err,data) =>{ // give the relative path of the document and pass a callback function
    if(err){
        console.log(err);  // if there is an error log
    }
    console.log(data.toString()); // convert the data to string
});
console.log('this is first'); // the function aboth is async and it will take time to run. It doesn't stop the code from continuing to execute


//write
fs.writeFile('./docs/blog1.txt','You have started to learn java', ()=>{
    console.log('the file is written');
});
fs.writeFile('./docs/blog2.txt','Created a new file', ()=>{
    console.log('the file 2 is written'); //if the file does not exist then fs automatically creates it for us.
});

//directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err) =>{
    if(err){
        console.log(err);
    }
    console.log('The directory is created!')
});
}else{
    fs.rmdir('./assets',(err) =>{
        if(err){
            console.log(err)
        }
        console.log('Deleting the directory')
    })
}


//delete
if(fs.existsSync('./docs/blog2.txt')){
    fs.unlink('./docs/blog2.txt',(err) =>{
        console.log(err);
    })
    console.log('Deleting the file');
}