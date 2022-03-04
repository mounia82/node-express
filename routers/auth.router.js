const express = require("express")
const router =express.Router() 


router.post("/", (req, res) => {
    res.json({
        message : "je suis connecter!!"
    })
})

router.get("/logout", (req, res) => {
    res.json({
        message : "vous etes déconneté"
    })
})


module.exports =router
