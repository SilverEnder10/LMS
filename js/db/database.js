const express = require("express");
const app = express();
const mongoose = require("mongoose")

//Database
const database = module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    try {
        mongoose.connect('mongodb+srv://uhealtzdb:GangalaDB69@uhealtzdb.jgdvpve.mongodb.net/mongodb?retryWrites=true&w=majority');
        console.log('Database connesso con successo DAJEE ROMA DAJEEE YAHOOOOO')
    } catch (error) {
        console.log(error)
        console.log('Database connessione fallita DAI CAZZO GIANLUCA RICONTROLLA QUELLO CHE CAZZO HAI SCRITTO')
    }
}



database();


app.listen(5050, () => {
    console.log("Il server è attivo alla porta 5050");
});