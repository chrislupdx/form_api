const mongoose = require('mongoose');

const NPCSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('NPC', NPCSchema);
