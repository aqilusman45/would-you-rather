import { _getUsers, _getQuestions } from "../../utils/_DATA";

export async function getStateFromDB() {
  return await Promise.all([_getUsers(), _getQuestions()]);
}
