const express = require('express');
const path = require('path');
const app = express();


app.set('view engine', 'ejs');


app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('index', { 
        title: "EJS PRACTICE",
        firstName: 'Enrico',
        lastName: 'Buan',
        age: 20,
        address: 'Angeles City',
        phoneNum: '0945465789',
        education: [
            'Bachelor of Science in Information Technology specialize in Web Development, Holy Angel University',
            'High School Diploma, Holy Angel University'
        ],
        experience: [
            'UI/UX Designer',
            'Intern, Software Development'
        ],
        skills: [
            'Web Design (HTML, CSS, JavaScript)',
            'Backend Development (Node.js, Express.js)',
            'UI/UX Design (Figma, Adobe XD)',
            'Version Control (Git, GitHub)'
        ]
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
