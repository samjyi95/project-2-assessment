const express = require('express');
const methodOverride = require('method-override');
let db = require('./models')

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.static('static'));
app.use(methodOverride('_method'));

// WRITE YOUR ROUTES HERE /////////////////////
//home route 


app.get('/', (req, res) => {
    db.widget.findAll()
    .then((widgets) => {
        res.render('home', { widgets })
    })
    .catch((err) => {
        console.log(error)
        res.send(error)
    })
})

app.post('/post', (req,res) => {
    db.widget.create(req.body)
    .then(() => {
        res.redirect('/')
    })
    .catch((err) => {
        res.send(error)
    })
})

app.delete('/widget/:id/', (req, res) => {
    db.widget.destroy({
        where: { id: req.params.id }
    })
    .then(() => {
        res.redirect('/')
    })
    .catch((err) => {
        res.send(error)
    })
})



// YOUR ROUTES ABOVE THIS COMMENT /////////////

app.listen(3000);
