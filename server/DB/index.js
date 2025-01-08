const mongoose = require('mongoose')

const connectDB = async(req, res)=>{
    try {
        const instantconnection = process.env.MongoDB_URI;
        console.log(`Successfully Connected with database `, instantconnection.connection.host);
        
        
    } catch (err) {
        console.log("Falid to connect with database ", err);
    }
}

module.exports = connectDB;