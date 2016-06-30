const express = require('express');
const router = express.Router();

router.get('/new', (req, res) => {
  res.render('new');
});

router.post('/create', (req, res) => {
  res.send('at user create');
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
