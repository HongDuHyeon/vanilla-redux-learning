import { legacy_createStore as createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModify = (state = 0) => {
  return state;
};

const countStore = createStore(countModify);

console.log(countStore.getState());
