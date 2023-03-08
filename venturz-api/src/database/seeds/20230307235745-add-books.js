'use strict';
const fs = require('fs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const imageBuffer1 = fs.readFileSync('tmp/uploads/sorcerers_stone.jpeg');
    const imageBuffer2 = fs.readFileSync('tmp/uploads/chamber_of_secrets.jpeg');
    const imageBuffer3 = fs.readFileSync('tmp/uploads/prisoner_of_azkaban.jpeg');
    const imageBuffer4 = fs.readFileSync('tmp/uploads/goblet_of_fire.jpeg');
    const imageBuffer5 = fs.readFileSync('tmp/uploads/order_of_the_phoenix.jpeg');
    const imageBuffer6 = fs.readFileSync('tmp/uploads/half_blood_prince.jpeg');
    const imageBuffer7 = fs.readFileSync('tmp/uploads/deathly_hallows.jpeg');

    await queryInterface.bulkInsert('books', [
      {
        id: 1,
        name: "Harry Potter and the Sorcerer's Stone",
        stock_count: 5,
        price: 12,
        image: Buffer.from(imageBuffer1).toString('base64'),
        shop_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        name: "Harry Potter and the Chamber of Secrets",
        stock_count: 2,
        price: 15,
        image: Buffer.from(imageBuffer2).toString('base64'),
        shop_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        name: "Harry Potter and the Prisoner of Azkaban",
        stock_count: 7,
        price: 20,
        image: Buffer.from(imageBuffer3).toString('base64'),
        shop_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 4,
        name: "Harry Potter and the Goblet of Fire",
        stock_count: 10,
        price: 25,
        image: Buffer.from(imageBuffer4).toString('base64'),
        shop_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 5,
        name: "Harry Potter and the Order of the Phoenix",
        stock_count: 3,
        price: 37,
        image: Buffer.from(imageBuffer5).toString('base64'),
        shop_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 6,
        name: "Harry Potter and the Half-Blood Prince",
        stock_count: 12,
        price: 50,
        image: Buffer.from(imageBuffer6).toString('base64'),
        shop_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 7,
        name: "Harry Potter and the Deathly Hallows",
        stock_count: 5,
        price: 25,
        image: Buffer.from(imageBuffer7).toString('base64'),
        shop_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      }

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('books', null, {});
  }
};
