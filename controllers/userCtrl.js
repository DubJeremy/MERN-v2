const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { signUpErrors } = require('../config/errors');

const User = require("../models/userModel");

// Auth ---------------------------------------
// exports.register = (req, res, next) => 
// {
//   bcrypt.hash(req.body.password, 10)
//   .then(hash => {
//     const user = new User({
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       email: req.body.email,
//       password: hash
//     });
//     user.save()
//     .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
//     .catch(error => res.status(400).json({ error }));
//   })
//   .catch(error => res.status(500).json({ error }));
// };

exports.register = (req, res, next) => 
{
  bcrypt.hash(req.body.password, 10)
  .then(hash => {
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hash
    });
    user.save()
    .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
    .catch(err => {
      const errors = signUpErrors(err);
      res.status(200).json({ errors })
    })
  })
  .catch(err => {
    const errors = signUpErrors(err);
    res.status(200).json({ errors })
  })
};

exports.signin = (req, res, next) => {
  User.findOne({ email: req.body.email })
  .then(user => {
    if (!user) {
      return res.status(401
        ).json({ error: 'Utilisateur non trouvé !' });
    }
    bcrypt.compare(req.body.password, user.password)
    .then(valid => {
      if (!valid) {
        return res.status(401).json({ error: 'Mot de passe incorrect !' });
      }
      res.status(200).json({
        userId: user._id,
        token: jwt.sign(
          { userId: user._id },
          'RANDOM_TOKEN_SECRET',
          { expiresIn: '7d' }
          )
        });
      })
      .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
  };

// User ---------------------------------------
exports.userInfo = (req, res, next) => {
  User.findOne({ _id: req.params.id })
    .then(user => res.status(200).json(( user )))
    .catch(error => res.status(404).json({ error }));
};

exports.userUpdate = (req, res, next) => {
  User.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Profil modifié !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.userDelete = (req, res, next) => {
  User.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: "Profil supprimé !"}))
      .catch(error => res.status(404).json({ error }));
};