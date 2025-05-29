const mongoose = require("mongoose");
const uri = 'mongodb+srv://leonardohfns:s3jCNrKlvN0aXLwT@cluster0.jlci8tl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };