export const idlFactory = ({ IDL }) => {
  const Ability = IDL.Record({
    'dexterity' : IDL.Nat32,
    'wisdom' : IDL.Nat32,
    'strength' : IDL.Nat32,
    'charisma' : IDL.Nat32,
    'constitution' : IDL.Nat32,
    'intelligence' : IDL.Nat32,
  });
  const Character = IDL.Record({
    'character_name' : IDL.Text,
    'character_race' : IDL.Text,
    'character_img' : IDL.Text,
    'character_classes' : IDL.Text,
    'character_ability' : Ability,
  });
  const CharacterID = IDL.Nat32;
  return IDL.Service({
    'createCharacter' : IDL.Func([Character], [CharacterID], []),
    'delete' : IDL.Func([CharacterID], [IDL.Bool], []),
    'readCharacter' : IDL.Func([CharacterID], [IDL.Opt(Character)], []),
    'update' : IDL.Func([CharacterID, Character], [IDL.Bool], []),
  });
};
export const init = ({ IDL }) => { return []; };
