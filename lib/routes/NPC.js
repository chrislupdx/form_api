const { Router } = require('express');
const NPC = require('../models/NPC');

module.exports = Router()
  .post('/', (req, res, next) => {
    const { name } = req.body;
    NPC
      .create({ name })
      .then(NPC => res.send(NPC))
      .catch(next);
  });
