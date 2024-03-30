import Nat32 "mo:base/Nat32";
import Text "mo:base/Text";
import Debug "mo:base/Debug";
import Hash "mo:base/Hash";
import HashMap "mo:base/HashMap";
import Result "mo:base/Result";
import Trie "mo:base/Trie";
import Option "mo:base/Option";

actor Character {

  public type Ability = {  strength : Nat32; dexterity : Nat32; constitution : Nat32; intelligence: Nat32; wisdom : Nat32; charisma : Nat32 };
  public type CharacterID = Nat32;

  public type Character = {
    character_img: Text;
    character_name : Text;
    character_classes : Text;
    character_race : Text;
    character_ability : Ability;
  };
  private stable var next: CharacterID = 0;

  private stable var characters : Trie.Trie<CharacterID, Character> = Trie.empty();


  public func createCharacter(character: Character) : async CharacterID {
    let characterId = next;
    next += 1;
    characters := Trie.replace(
      characters,
      key(characterId),
      Nat32.equal,
      ?character,
    ).0;
    characterId
  };

  public func readCharacter(characterId : CharacterID): async ?Character {
    let result = Trie.find(characters, key(characterId), Nat32.equal);
    result
  };

  public func update(characterId : CharacterID, character: Character): async Bool {
    let result = Trie.find(characters, key(characterId), Nat32.equal);
    let exists = Option.isSome(result);
    if(exists) {
      characters := Trie.replace (
        characters,
        key(characterId),
        Nat32.equal,
        ?character,
      ).0;
    };
    exists

  };

  public func delete(characterId : CharacterID): async Bool {
    let result = Trie.find(characters, key(characterId), Nat32.equal);
    let exists = Option.isSome(result);
    if(exists) {
      characters := Trie.replace(
      characters,
      key(characterId),
      Nat32.equal,
      null,
      ).0;
    };
    exists
  };

    private func key(x: CharacterID): Trie.Key<CharacterID> {
    { hash= x; key= x };
  };

};