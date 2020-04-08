import { _getUsers, _getQuestions } from "../../utils/_DATA";

export async function getInitialState() {
  try {
    return await Promise.all([_getUsers(), _getQuestions()]);
  } catch (error) {
    alert("Error getting data...", error);
  }
}
