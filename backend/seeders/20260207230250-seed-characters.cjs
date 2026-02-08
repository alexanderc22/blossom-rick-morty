'use strict';

const fetch = require('node-fetch');

module.exports = {
  async up(queryInterface) {
    console.log('🚀 Consultando API de Rick and Morty...');

    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();

    console.log(`✅ Personajes recibidos: ${data.results.length}`);

    const characters = data.results.map(character => ({
      name: character.name,
      status: character.status,
      species: character.species,
      gender: character.gender,
      origin: character.origin?.name || null,
      image: character.image,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    console.log('📦 Insertando en BD...');

    await queryInterface.bulkInsert('characters', characters);

    console.log('🎉 Seeder ejecutado correctamente');
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('characters', null, {});
  }
};
