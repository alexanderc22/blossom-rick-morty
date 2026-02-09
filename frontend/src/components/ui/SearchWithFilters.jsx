import React, { useState } from 'react';
import { FiSearch, FiSliders } from 'react-icons/fi';

export default function SearchWithFilters({ value, onChange, onFilter }) {
  const [showFilters, setShowFilters] = useState(false);
  const [characterFilter, setCharacterFilter] = useState('All');
  const [speciesFilter, setSpeciesFilter] = useState('All');

  const handleApplyFilters = () => {
    onFilter({ characterFilter, speciesFilter });
    setShowFilters(false);
  };

  return (
    <div className="relative w-full">
      {/* Input con iconos */}
      <div className="flex items-center rounded-lg bg-gray100 px-3 w-full" style={{ height: 52 }}>
        {/* Lupa al lado izquierdo */}
        <FiSearch className="text-gray-400 mr-3" size={20} />

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search or filter results"
          className="flex-1 outline-none bg-gray100 placeholder-gray-400 text-gray-900 text-sm font-greycliff"
        />

        {/* Icono ajustes / filtros */}
        <button onClick={() => setShowFilters(!showFilters)}>
          <FiSliders size={20} className="text-primary700" />
        </button>
      </div>

      {/* Popup de filtros */}
      {showFilters && (
        <div className="absolute z-10 mt-2 w-full bg-white border rounded-lg shadow-lg p-6 space-y-4">
          {/* Character Filter */}
          <div>
            <p className="text-sm font-medium mb-2 font-greycliff">Character</p>
            <div className="flex justify-between gap-2">
              {['All', 'Starred', 'Others'].map((option) => (
                <button
                  key={option}
                  onClick={() => setCharacterFilter(option)}
                  className={`flex-1 py-3 text-base rounded border font-greycliff transition ${
                    characterFilter === option
                      ? 'bg-primary600 text-white border-primary600'
                      : 'text-gray-700 border-gray-300'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Specie Filter */}
          <div>
            <p className="text-sm font-medium mb-2 font-greycliff">Specie</p>
            <div className="flex justify-between gap-2">
              {['All', 'Human', 'Alien'].map((option) => (
                <button
                  key={option}
                  onClick={() => setSpeciesFilter(option)}
                  className={`flex-1 py-3 text-base rounded border font-greycliff transition ${
                    speciesFilter === option
                      ? 'bg-primary600 text-white border-primary600'
                      : 'text-gray-700 border-gray-300'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Botón Filter debajo de todo */}
          <button
            onClick={handleApplyFilters}
            className="w-full bg-primary600 text-white py-3 rounded text-base font-greycliff hover:bg-primary700 transition"
          >
            Filter
          </button>
        </div>
      )}
    </div>
  );
}
