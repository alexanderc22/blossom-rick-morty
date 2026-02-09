import React from 'react';

const CharacterCard = ({ character, onSelect }) => {
  return (
    <div
      className="p-3 rounded bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center space-x-3"
      onClick={() => onSelect(character)}
    >
      <img src={character.image} alt={character.name} className="w-12 h-12 rounded-full" />
      <div>
        <h3 className="font-semibold">{character.name}</h3>
        <p className="text-sm text-gray-600">{character.species}</p>
      </div>
    </div>
  );
};

export default CharacterCard;