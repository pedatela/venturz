'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@email.com',
        is_seller: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        name: 'Seller',
        email: 'seller@email.com',
        is_seller: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        name: 'Seller2',
        email: 'selle2@email.com',
        is_seller: true,
        created_at: new Date(),
        updated_at: new Date()
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
