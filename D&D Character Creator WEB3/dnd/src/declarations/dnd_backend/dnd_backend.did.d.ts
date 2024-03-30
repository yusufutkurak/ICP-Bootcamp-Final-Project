import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Ability {
  'dexterity' : number,
  'wisdom' : number,
  'strength' : number,
  'charisma' : number,
  'constitution' : number,
  'intelligence' : number,
}
export interface Character {
  'character_name' : string,
  'character_race' : string,
  'character_img' : string,
  'character_classes' : string,
  'character_ability' : Ability,
}
export type CharacterID = number;
export interface _SERVICE {
  'createCharacter' : ActorMethod<[Character], CharacterID>,
  'delete' : ActorMethod<[CharacterID], boolean>,
  'readCharacter' : ActorMethod<[CharacterID], [] | [Character]>,
  'update' : ActorMethod<[CharacterID, Character], boolean>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: ({ IDL }: { IDL: IDL }) => IDL.Type[];
