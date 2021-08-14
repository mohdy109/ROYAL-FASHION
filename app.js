const express = require ("express");
const app = express();
const mongoose = require("mongoose");


app.use(express.static('public'))
app.set('view engine','hbs')
app.get ("",(req,res)=>{
     res.render('index') 
})
app.get("/contact%20us",(req,res)=>{
    res.render('contact',{title : 'about me',style : 'contact.css',description:'lorem bhaang bhosda' });
});


mongoose.connect("mongodb+srv://root:root@cluster0.k3zjw.mongodb.net/yasir",
{useNewUrlParser : true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false
}).then(()=>{
 console.log(`connection to database established`)
}).catch(err=>{
 console.log(`db error ${err.message}`);
 process.exit(-1)

})

app.listen(3000,()=>{
    console.log("server is running")
})