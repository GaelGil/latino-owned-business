'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Businesses', [
      {
        businessName: "name",
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
        businessName: "name",
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
        businessName: "name",
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
        businessName: "name",
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
        businessName: "name",
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
        businessName: "name",
        adresss: "some adress",
        website: "some webiste",
        shortDescription: "this is short description",
        longdescrption: "this is a longe description",
        createdAt: new Date(),
        updatedAt: new Date(),
        neighborhood: "this neighborhood",
        city: "this City",
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Businesses', null, {});
  }
};
