const express=require('express');
const app=express();
const path = require ("path");
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine" ,"ejs");
app.set('views', path.join(__dirname, 'views'));

/*const workingHoursMiddleware = (req, res, next) => {
    const date = new Date();
    const day = date.getDay(); 
    const hour = date.getHours();

    
    if (day >= 1 && day <= 5 && hour >= 12 && hour < 17) {
        next(); 
    } else {
        res.send('Sorry, the website is only accessible during working hours (Monday to Friday, 9 AM to 5 PM).');
    }
};
app.use (workingHoursMiddleware);*/

app.get('/', (req, res) => {
    res.render('home');
});
app.get('/service', (req, res) => {
    res.render('service');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

const port=3000;
app.listen (port,() => console.log(`Server is running on http://localhost:${port}`)
);