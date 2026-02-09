import { useMutation } from '@apollo/client';
import { TOGGLE_FAVORITE } from '../../graphql/mutations';
import { GET_CHARACTERS } from '../../graphql/queries';

export default function CharacterList({ characters, onSelect, selectedCharacter }) {
  const [toggleFavorite] = useMutation(TOGGLE_FAVORITE, {
    refetchQueries: [GET_CHARACTERS],
  });

  if (!characters.length) {
    return <p className="text-sm text-gray-500">No results</p>;
  }

  // Separar favoritos y no favoritos
  const starred = characters.filter((c) => c.is_favorite);
  const regular = characters.filter((c) => !c.is_favorite);

  // Función para renderizar items
  const renderCharacterItem = (c) => {
    const isSelected = selectedCharacter?.id === c.id;

    return (
      <div
        key={c.id}
        onClick={() => onSelect(c)}
        className={`flex items-center justify-between px-3 py-3 rounded-lg cursor-pointer transition-colors
          ${isSelected ? 'bg-purple-100' : 'hover:bg-purple-100'}`}
      >
        <div className="flex items-center space-x-3">
          <img
            src={c.image}
            alt={c.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-base font-medium text-[#111827]">{c.name}</p>
            <p className="text-sm text-[#6B7280]">{c.species}</p>
          </div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation(); // no dispara onSelect
            toggleFavorite({ variables: { id: c.id } });
          }}
          className="text-xl"
        >
          {c.is_favorite ? '💚' : '🤍'}
        </button>
      </div>
    );
  };

  return (
    <div className="flex flex-col space-y-4">
      {/* Sección Starred */}
      {starred.length > 0 && (
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold text-[#111827] mb-2">
            STARRED CHARACTERS ({starred.length})
          </h3>
          <div className="flex flex-col divide-y divide-gray-200 rounded-lg overflow-hidden">
            {starred.map(renderCharacterItem)}
          </div>
        </div>
      )}

      {/* Sección Regular */}
      {regular.length > 0 && (
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold text-[#111827] mb-2">
            CHARACTERS ({regular.length})
          </h3>
          <div className="flex flex-col divide-y divide-gray-200 rounded-lg overflow-hidden">
            {regular.map(renderCharacterItem)}
          </div>
        </div>
      )}
    </div>
  );
}
