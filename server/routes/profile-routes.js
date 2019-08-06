const router = require('express').Router();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


const authCheck = (req, res, next) => {
  if (!req.user) {
    // execute if user is not logged in
    res.redirect('/auth/login')
  } else {
    // if they are logged in, go next
    next();
  }
};

router.get('/', authCheck, (req, res) => {
  res.send('You are logged in, this is your username: ' + req.user.username);
})
router.post('/', function (req, res) {
  console.log(req.body)
  res.send('hello')
})


module.exports = router;