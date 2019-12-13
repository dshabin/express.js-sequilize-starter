const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const config = require('./config.json');

class DB {
  init = () => {
    try {
      const db = {};
      console.log('--- Database connecting ... ---')
      let sequelize = new Sequelize(config);
      console.log('--- Database connected successfully ---')
      fs
        .readdirSync(`${__dirname}/models`)
        .filter(file => {
          return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
        })
        .forEach(file => {
          const model = sequelize['import'](path.join(`${__dirname}/models`, file));
          db[model.name] = model;
        });

      Object.keys(db).forEach(modelName => {
        if (db[modelName].associate) {
          db[modelName].associate(db);
        }
      });

      db.sequelize = sequelize;
      db.Sequelize = Sequelize;
      return db;
      
    } catch (e) {
      console.log(e)
    }
  }
}

export default new DB;
