const mongoose = require('mongoose')
const superheroSchema = mongoose.Schema({
  superhero_name: {
    type: String,
    require: true,
    unique: true
  },
  real_name: {
    type: String,
    require: true
  },
  features: {
    type: Object,
    require: true,
    universe: {
      type: String,
      require: true,
    },
    superpowers: {
      type: Array,
      require: true,
    },
    sidekick: {
      type: Object,
      require: true,
      sidekick_name: {
        type: String,
        require: true
      },
      powers: {
        type: Array,
        require: true,
      },
    },
  },
});

module.exports = mongoose.model('superheroCollection', superheroSchema);