const express = require("express")
const router = express.Router()

//localhost:3000/api/categories/ --> get all
router.get("/",(req, res) =>{
    res.json({
        message : "Liste de toutes les categs"
    })

})
//localhost:3000/api/categories/:idProd --> get one by id
router.get("/:id", (req, res) =>{
    res.json({
        message : "une seule categorie"
    })

})


// localhost:3000/api/categories/          --> post categories

router.post("/", (req, res) => {

    res.json({

        message : "Création de la catégorie"

    })

})

//localhost:3000/api/categories/:idProd --> put / patch categories on product
router.put("/:id",(req, res) => {
    res.json({
        message : "modif d'une categ"
    })

})

//localhost:3000/api/categories/:idProd --> delete one categories on product
router.delete("/:id",(req, res) =>{
    res.json({
        message : "suppression d'une categ"
    })

})

module.exports = router