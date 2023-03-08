'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('shops', [
      {
        id: 1,
        name: 'Harry Potter Shop',
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        name: 'Shop from Seller 2',
        user_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      }

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('shops', null, {});
  }
};
