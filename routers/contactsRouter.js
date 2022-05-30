const express = require("express");
const contactsRouter = express.Router();

contactsRouter.get('/', (req, res) => {
    res.render('contacts.ejs', {
        email: 'reallibi@gmail.com',
        phone: '873423423423',
        addresses: ['Abaya 24', 'Kenesary 40', 'Auezova 22', 'Orynbor 52']
    });
});

module.exports = contactsRouter;
