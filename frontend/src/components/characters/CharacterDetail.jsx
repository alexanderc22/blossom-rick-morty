import React from 'react';

export default function CharacterDetail({ character }) {
  if (!character) {
    return (
      <div className="w-full max-w-md p-4 sm:p-6 bg-white rounded-lg">
        <p className="text-gray-500">Select a character to see details</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md p-4 sm:p-6 bg-white rounded-lg">
      {/* Imagen y nombre alineados a la derecha */}
      <div className="flex flex-col items-end mb-6 relative">
        <div className="relative flex items-start mb-4">
          <img
            src={character.image}
            alt={character.name}
            className="w-32 h-32 rounded-full"
          />
          {character.is_favorite && (
            <span className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 bg-white rounded-full p-1 shadow-md">
              <span className="text-green-500 text-xl">💚</span>
            </span>
          )}
        </div>
        <h2 className="text-lg sm:text-xl font-semibold text-[#111827] mb-4 sm:mb-6">
          {character.name}
        </h2>
      </div>

      {/* Datos del personaje */}
      <div className="flex flex-col divide-y divide-gray-200 text-sm sm:text-base">
        <div className="py-3">
          <p className="font-medium">Species</p>
          <p className="text-[#6B7280]">{character.species}</p>
        </div>

        <div className="py-3">
          <p className="font-medium">Status</p>
          <p className="text-[#6B7280]">{character.status}</p>
        </div>

        <div className="py-3">
          <p className="font-medium">Gender</p>
          <p className="text-[#6B7280]">{character.gender}</p>
        </div>

        <div className="py-3">
          <p className="font-medium">Origin</p>
          <p className="text-[#6B7280]">{character.origin}</p>
        </div>

      </div>
    </div>
  );
}
