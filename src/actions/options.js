import { ADD_OPTION, REMOVE_OPTION, FINAL_LIST } from "../constants/types";

export const addOption = (id) => ({
  type: ADD_OPTION,
  id,
});

export const removeOption = (id) => ({
  type: REMOVE_OPTION,
  id,
});

export const finalList =(data) => ({
  type: FINAL_LIST,
  data,
})