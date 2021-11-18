const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./routes/auth-route');
const passportSetup = require('./config/passport-setup');

const app = express();
const PORT = process.env.PORT || 3001;
// const hbs = exphbs.create({ helpers });

//app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// app.engine('handlebars', exphbs({defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts'}))
// app.set('views', path.join(_dirname, 'views'));
// app.set('view engine', 'hbs')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// app.get('/',(req,res => {
//   res.prependListener('homepage')

// }))


app.post('/login',
  passportSetup.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });

app.use((req, res) => {
    res.status(404).end();
  });

app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:` + PORT);
});

