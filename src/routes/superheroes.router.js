const express = require('express');
const superhero_route = express.Router();
const superheroService = require('../services/superheroes.service');
const superheroSchema = require('../models/superheroes.model');
/* Creamos una instancia de la clase superheroService */
const service = new superheroService();

superhero_route.post('/superhero', async (req, res) => {
  const superhero = superheroSchema(req.body);
  await service
    .createSuperhero(superhero)
    .then((data) => res.status(201).json(data))
    .catch((err) => res.status(404).json({ message: err}));
});

superhero_route.get('/', async (req, res) => {
  await service
    .listSuperheroes()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json({ message: err}));
});

superhero_route.get('/:superheroId', async (req, res) => {
  const { superheroId } = req.params;
  await service
    .findOneSuperhero(superheroId)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json({ message: err}));

});

superhero_route.put('/:superheroId', async (req, res) => {
  const { superheroId } = req.params;
  const {
    superhero_name,
    real_name,
    features = {universe, superpowers, sidekick: {sidekick_name, powers}},
  } = req.body;
  await service
    .editSuperhero(superheroId, superhero_name, real_name, features)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json({ message: err}));
});

superhero_route.delete('/:superheroId', async (req, res) => {
  const { superheroId } = req.params;
  await service
    .removeSuperhero(superheroId)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json({ message: err}));
});

/* Consultar los poderes de el ayudante del superheroe */
superhero_route.get('/:superheroId/powers', async (req, res) => {
  const { superheroId } = req.params;
  await service
    .findOneSuperhero(superheroId)
    .then((data) => res.status(200).json(data.features[0].sidekick[0].powers))
    .catch((err) => res.status(404).json({ message: err}));

});

module.exports = superhero_route;