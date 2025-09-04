'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuarios', [
      {
        nombre: 'AdminTest',
        email: 'admin@test.com',
        edad: 30,
        password: await bcrypt.hash('admin123', 10),
        rol: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'ClienteTest',
        email: 'cliente@test.com',
        edad: 25,
        password: await bcrypt.hash('cliente123', 10),
        rol: 'cliente',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuarios', {
      email: ['admin@test.com', 'cliente@test.com']
    }, {});
  }
};
