const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:qwertymong0@cluster0.3spod.mongodb.net/blog?retryWrites=true&w=majority").then(()=>{
    console.log("DB CONNECTED");
}).catch((e)=>{
    console.log("No DB CONNECTED");
});

