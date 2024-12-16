const express = require('express');
const app = express();

app.use(express.json());
    
app.listen(3000, () => {
     console.log('Server is running on port 3000');
});


app.get('/hello', (req, res) => {
    res.send('Bonjour bienvenu dan snotre Api');
 });

app.get('/user/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Bonjour ${name}`)
  });
    
app.get('/search', (req, res) => {
    const search = req.query.query;
    if(search){
    res.send(`Vous avez cherché ${search}`);
    }else{
        res.send("Aucune recherche n'a été effectuée");
    }
 });

app.get('/product/:category/:id', (req, res) => {
    const category = req.params.category;
    const id = req.params.id;
    res.send(`Vous avez demandé le produit: ${id}, de la catégorie: ${category}`);
 });

app.get('/api/info', (req, res) => {
    const info = {
        message :' Bienvenu sur notre API',
        statut : 'succes'
    }
    res.json(info);
})

app.get('/welcome', (req, res) => {
    res.send(`
        <h1>Bienvenu sur notre site</h1>
        <P>Explorer nos  finctionnalité </P>
    `)
});


app.get('/profile/:username/:age', (req, res) => {
    const username = req.params.username;
    const age = req.params.age;
    if (!age || isNaN(age)) {
        res.send("Vous n'avez pas renseigné votre âge ou l'âge est invalide");
    } else {
        res.send(`Bonjour ${username}, vous avez ${age} ans`);
    }
});


app.get('/api/user/:name', (req, res) => {
    const names = [
        'jean',
        'paul',
        'marie',
        'julie',
        'luc',
        'sophie',  
        'pierre',,
        'jacques',
        'françois',
        'christine',
        'philippe'
    ]
    const name = req.params.name;

    if (names.includes(name)) {
        res.send(`Bienvenu ${name}`);
    }else{
        const info = {
            message: 'Utilisateur non trouvé',
        }
        res.status(404).json(info);
    }
});
    