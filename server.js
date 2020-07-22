const express = require('express');
const app = express('express');
// allows use of bcrypt to securely store info using hashed passwords
const bcrypt = require('bcrypt');
const passport = require('passport');

// const {
//     response
// } = require('express');

const initializePassport = require('./passport.config');
initializePassport(passport);

//variable used to store info locally. Should be in a databse in normal production
const user = [];

app.set('view-engine', 'ejs');
app.use(express.urlencoded({
    extended: false
}));

app.get('/', (req, res) => {
    res.render('index.ejs', {
        name: 'Walter'
    });
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.post('/login', (req, res) => {

});

app.get('/register', (req, res) => {
    res.render('register.ejs');
});

app.post('/regiser', (req, res) => {

    try {
        const hashedPassword = await
        bcrypt.hash(req.body.password, 10);
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        response.redirect('/login');
    } catch {
        res.redirect('/register');
    }
    console.log(users);
});
app.listen(3000);