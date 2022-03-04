const express = require("express")
const router = express.Router()


//localhost:3000/api/accueil/               -->GET  accueil  (récupérer la page d'accueil)

router.get("/api/accueil/:id",(req, res) =>{
    res.json({
        message : "la page d'accuiel"
    })
})

module.exports =router