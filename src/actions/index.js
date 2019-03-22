export const ADD_CHARACTER = "ADD-CHARACTER";

export default function addCharacterById(id) {
  const action = {
    type: ADD_CHARACTER,
    id
  };
  return action;
}
