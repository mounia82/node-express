const express = require("express")
const app =express()     /*je demarre app express*/
const port = process.env.PORT || 3000




const usersRouter =require("./routers/other.router")
const otherRouter=require ("/router/other.router")
const authRouter =require("./routers/auth.router")

/*Match router pour:
localhost:3000/api/users/       -->GET all users (récupérer tout les users)
localhost:3000/api/users/:id    -->GET one user by id (récupérer un user)
localhost:3000/api/users/       -->POST one user (ajouter un user)
localhost:3000/api/users/:id    -->PUT one user (modifir un user)
localhost:3000/api/users/:id    -->DELETE one user(supprimer un user)


dès que express détècte /api/users, il va contacter ET envoyer la requète vers ce router la.
    MAIS ce qu'il fait de manière "humaine" ->
        url.pathname = /api/users/profs/tutu/toto -> L'envoi vers le router, sous ce format LA !! ->
        -> /mesgenoux/tutu/toto
 */
^v

app.use("/api/users", usersRouter) //utilise le middeware use du routage
app.use("/api/router", otherRouter) //utilise le middeware use du routage
app.use("/api/auth", authRouter) //utilise le middeware use du routage



app.listen(port, console.log(`Le serveur écoute sur le port${port}`))
