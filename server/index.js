// server/index.js
const express = require("express");
const database = require('nedb');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const withAuth = require('./auth');
const crypto = require('crypto');

const PORT = process.env.PORT || 3001;

const db = new database({ filename: 'myhealthappdatabase.db', autoload: true });
const key = 'mysupersecretkey';

const app = express();
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

const validator = [
  check('username')
    .exists()
    .withMessage('Username is not provided'),
  check('username')
    .not()
    .isEmpty()
    .withMessage('Username should not be empty'),
  check('password')
    .exists()
    .withMessage('Password is not provided'),
  check('password')
    .isLength({ min: 6 })
    .withMessage('Password should be at least 6 characters long'),
];

app.get('/api', (req, res) => {
  res.status(200).json({
    message: 'Hello world',
  });
});

app.get('/api/v1/check', withAuth, (req, res) => {
  const { id } = req.data;
  db.findOne({ _id: id }, (err, document) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json({
        id: document._id,
        username: document.username,
      });
    }
  });
});

app.post('/api/register', validator, (req, res) => {
  const { username, password } = req.body;
  const errorFormatter = ({ message, param }) => ({ message, param });
  const errors = validationResult(req).formatWith(errorFormatter);

  if (!errors.isEmpty()) {
    res.status(400).json(errors.array({ onlyFirstError: true }));
  } else {
    db.findOne({ username }, (err, doc) => {
      if (err) {
        res.status(500).json({
          message: err,
        });
      } else if (doc) {
        res
          .status(400)
          .json({ message: 'User already exists' });
      } else {
        bcrypt.hash(password, 10, (error, encrypted) => {
          if (error) {
            res.sendStatus(500);
          } else {
            db.insert({ username, password: encrypted }, (err, document) => {
              if (err) {
                res.sendStatus(500);
              } else {
                res.status(201).json({
                  message: 'Registration successful',
                  data: document.username,
                });
              }
            });
          }
        });
      }
    });
  }
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  db.findOne({ username }, (err, document) => {
    if (err) {
      res.sendStatus(500);
    } else if (document) {
      bcrypt.compare(password, document.password, (error, same) => {
        if (error) {
          res.sendStatus(500);
        } else if (same) {
          const token = jwt.sign({ id: document._id }, key, {
            expiresIn: '15m',
          });
          res.cookie('token', token, {
            httpOnly: true,
            sameSite: 'none'
          });
          res.status(200).json({
            id: document._id,
            username: document.username,
            message: "Logged in successfully"
          });
        } else if (!same) {
          res.status(400).json({
            message: "Password didn't match",
          });
        } else {
          res.status(400).json({
            message: 'error!!!!!!!!!!!',
          });
        }
      });
    } else if (document === null) {
      res.status(404).json({
        message: 'User not found',
      });
    }
  });
});

app.get('/api/v1/logout', (req, res) => {
  res.clearCookie('token');
  res.sendStatus(200);
});

app.post('/api/v1/create', (req, res) => {
  const { goalType, goalName, startDate, endDate, repetition } = req.body;
  const goal_id = crypto.randomUUID()
  const id = req.headers.authorization
  db.update(
    { _id: id },
    {
      $pull: {
        goals: {
          goal_id: goal_id,
        }
      },
      $push: {
        goals: 
          {
            goal_id: goal_id,
            goalType: goalType,
            goalName: goalName,
            startDate: startDate,
            endDate: endDate,
            repetition: repetition
          }
      }
    },
    { upsert: false },
    function (err) {
      if(err){
        res.sendStatus(500);
      } else {
        res.status(201).json({
          message: "Goal created"
        });
      }
    }
  )
});

/**
{"username":"Claudiu","password":"$2a$10$yijoNHQFQMHwyK/43J0HuOrKO3gv/keA8nKTeakVsVbX3V5xm6L9O","_id":"mAK0h8G8kyEGNDF1","goals":[{"goal_id":"001","goal":"g1","startDate":"1","endDate":"2"},{"goal_id":"002","goal":"g2","startDate":"1","endDate":"3"}]}
*/


app.post('/api/v1/update', (req, res) => {
  const { goal_id, goal, startDate, endDate, repetition, completed, username } = req.body;
  db.update(
    { username: username },
    {
      $pull: {
        goals: {
          goal_id: goal_id,
        }
      },
      $push: {
        goals: 
          {
            goal_id: goal_id,
            goal: goal,
            startDate: startDate,
            endDate: endDate,
            repetition: repetition,
            completed: completed
          }
      }
    },
    { upsert: false },
    function (err) {
      if(err){
        res.sendStatus(500);
      } else {
        res.status(201).json({
          message: "Goal updated"
        });
      }
    }
  )
});

app.delete('/api/v1/delete', (req, res) => {
  const { goal_id, username } = req.body;
  db.update(
    { username: username },
    {
      $pull: {
        goals: {
          goal_id: goal_id,
        }
      }
    },
    { upsert: false },
    function (err) {
      if(err){
        res.sendStatus(500);
      } else {
        res.status(201).json({
          message: "Goal deleted"
        });
      }
    }
  )
});

app.get('/api/v1/goals', (req, res) => {
  const id = req.headers.authorization
  db.find(
    { _id: id },
    function (err) {
      if(err){
        res.sendStatus(500);
      } else {
        res.status(201).json({
          message: "Found goals"
        });
      }
    }
  )
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});