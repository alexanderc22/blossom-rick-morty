import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../graphql/queries';

import CharacterList from '../components/characters/CharacterList';
import CharacterDetail from '../components/characters/CharacterDetail';
import SearchWithFilters from '../components/ui/SearchWithFilters';

export default function Home() {
  const [search, setSearch] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const [filters, setFilters] = useState({
    characterFilter: 'All',
    speciesFilter: 'All',
  });

  // 🎯 Mapeo filtros → GraphQL
  const variables = {
    name: search || null,
    species:
      filters.speciesFilter !== 'All'
        ? filters.speciesFilter
        : null,
    is_favorite:
      filters.characterFilter === 'Starred'
        ? true
        : filters.characterFilter === 'Others'
        ? false
        : null,
  };

  const { data, loading, error } = useQuery(GET_CHARACTERS, {
    variables,
  });

  // Función para volver al listado en móviles
  const handleBack = () => setSelectedCharacter(null);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-gray-50 border-b md:border-b-0 md:border-r p-4 flex flex-col
          md:w-1/3 w-full
          ${selectedCharacter ? 'hidden md:flex' : 'flex'}
        `}
      >
        <h2 className="text-xl font-bold mb-4">Rick and Morty list</h2>

        <SearchWithFilters
          value={search}
          onChange={setSearch}
          onFilter={setFilters}
        />

        <div className="flex-1 overflow-y-auto mt-4">
          {loading && <p className="text-sm text-gray-500">Loading...</p>}
          {error && <p className="text-sm text-red-500">{error.message}</p>}

          {data && (
            <CharacterList
              characters={data.characters}
              onSelect={setSelectedCharacter}
              selectedCharacter={selectedCharacter}
            />
          )}
        </div>
      </aside>

      {/* Detail */}
      {selectedCharacter && (
        <main className="flex-1  bg-white p-4 md:p-6 overflow-y-auto w-full md:w-auto">
          {/* Botón regresar solo en móviles */}
          <button
            className="md:hidden mb-4 px-3 py-1 text-3xl font-bold text-primary600"
            onClick={handleBack}
          >
            &larr; 
          </button>

          <CharacterDetail character={selectedCharacter} />
        </main>
      )}

      {/* Placeholder cuando no hay seleccionado en móviles */}
      {!selectedCharacter && (
        <main className="hidden md:flex flex-1 bg-white p-6 overflow-y-auto ">
          <CharacterDetail character={null} />
        </main>
      )}
    </div>
  );
}
