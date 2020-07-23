'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     /**
//      * Add seed commands here.
//      *
//      * Example:
//      * await queryInterface.bulkInsert('People', [{
//      *   name: 'John Doe',
//      *   isBetaMember: false
//      * }], {});
//     */
//   },

//   down: async (queryInterface, Sequelize) => {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */
//   }
// };


module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Businesses', [
      {
        businessName: "business 1",
        adresss: "some adress",
        website: "some webiste",
        shortDescription: "this is short description",
        longdescrption: "this is a longe description",
        createdAt: new Date(),
        updatedAt: new Date(),
        neighborhood: "this neighborhood",
        city: "this City",
      },
      {
        businessName: "businees 2",
        adresss: "some adress",
        website: "some webiste",
        shortDescription: "this is short description",
        longdescrption: "this is a longe description",
        createdAt: new Date(),
        updatedAt: new Date(),
        neighborhood: "this neighborhood",
        city: "this City",
      }
    ], {});

    const businesses = await queryInterface.sequelize.query(
      `SELECT id from "Businesses";`
    );

    const businessesRows = businesses[0];

    return await queryInterface.bulkInsert('Socialmedia', [
      {
        name: "name",
        link: "some adress", 
        BusinessId: businessesRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
      {
        name: "name",
        link: "some adress",        
        BusinessId: businessesRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name: "name",
        link: "some adress", 
        BusinessId: businessesRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Businesses', null, {});
    await queryInterface.bulkDelete('Socialmedia', null, {});
  }
};
