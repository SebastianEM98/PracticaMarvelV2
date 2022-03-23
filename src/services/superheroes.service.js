const superheroSchema = require('../models/superheroes.model');
const superheroRoute = require('../routes/superheroes.router');
class superheroService {
  /* Funciones asincronas devuelven una promesa */
  async createSuperhero(superhero){
    superhero.save();
    return superhero;
  }

  async listSuperheroes(){
    return superheroSchema.find();
  }

  async findOneSuperhero(superheroId){
    return superheroSchema.findById({ _id: superheroId });
  }

  async editSuperhero(superheroId, superhero_name, real_name, features){
    return superheroSchema.findById({_id: superheroId}).then((superheroE) => {
      if (!superheroE) throw Error('No se encontro el superheroe');
      return superheroSchema.updateOne(
        {_id: superheroId},
        {superhero_name, real_name, features}
      );
    });
  }

  async removeSuperhero(superheroId){
    return superheroSchema.findById({_id: superheroId}).then((superheroDelete) => {
      if (!superheroDelete) throw Error('No se encontro el superheroe');
      return superheroSchema.deleteOne(superheroDelete);
    });
  }
}
module.exports = superheroService;