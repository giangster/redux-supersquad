import characters_json from "../data/characters_json";

function characters(state = characters_json, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default characters;
