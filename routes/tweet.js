const router = require('express').Router();



const newCtrl = (req, res) => {
  res.render('../views/user/new');
};

const createCtrl = (req, res) => {
  res.send('at create tweet ctrl');
};

const showCtrl = (req, res) => {
  res.send('at show tweet ctrl');
};

const destroyCtrl = (req, res) => {
  res.send('at destroy tweet ctrl');
};

router.get('/new', newCtrl);
router.post('/create', createCtrl);
router.get('/show', showCtrl);
router.delete('/destroy', destroyCtrl);


module.exports = router;
