fs.unlink('./example.txt',(err)=>{
 if(err)
 console.log(err);
 else
 console.log('the file is deleted');
});
