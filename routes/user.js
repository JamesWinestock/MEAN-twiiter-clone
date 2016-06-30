const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/new', (req, res) => {
  res.render('users/new');
});

router.post('/create', (req, res) => {
  // create user
  // then redirect
  User.create(req.query);
  res.redirect('/');
});

router.get('/show', (req, res) => {
  res.render('show');
});

router.get('/edit', (req, res) => {
  res.render('edit');
});

router.patch('/update', (req, res) => {
  res.send('at user create');
});

router.delete('/destroy', (req, res) => {

});

module.exports = router;
