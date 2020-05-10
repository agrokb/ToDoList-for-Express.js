const express = require("express")
const bodyParser = require("body-parser");

const app = express();

let item_list =  ["Buy Food","Cook Food","Eat Food"] ;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));


app.get("/",function(req,res){

    let today = new Date();
    
    let options = {
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    let day = today.toLocaleDateString("en-CA",options);
    
    res.render("list",{kindOfDay:day,newListItem:item_list})
});

app.post("/",function(req,res){
    let item = req.body.newItem;
    item_list.push(item);
    res.redirect("/");
})

app.listen(3000,function(){
    console.log("Server started on port 3000")
})