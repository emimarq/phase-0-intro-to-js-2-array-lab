// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
  cats.push("Ralph");
};

function destructivelyPrependCat() {
  cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
  cats.pop()
}

function destructivelyRemoveFirstCat() {
  cats.shift()
}

function appendCat(){
  let newArr = [...cats, "Broom"];
  return newArr;
}

function prependCat(){
  let newArray = ["Arnold", ...cats];
  return newArray;
}

function removeLastCat(){
  let rmvLast = [...cats];
  rmvLast.pop();
  return rmvLast;
}

function removeFirstCat(){
  let rmvFirst = [...cats];
  rmvFirst.shift();
  return rmvFirst;
}