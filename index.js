const app = "I don't do much.";

<<<<<<< HEAD

function destructivelyAppendKitten(name){
return kittens.push(name);
}

function destructivelyPrependKitten(name){

  return kittens.unshift(name);

}

function destructivelyRemoveLastKitten(name){

  return kittens.pop(name);

}

function destructivelyRemoveFirstKitten(name){

  return kittens.shift(name);

}


function appendKitten(name){

  return [...kittens, name];

}

function prependKitten(name){

  return [name, ...kittens];

}


function removeLastKitten(){

  return kittens.slice(0, kittens.length -1);

}

function removeFirstKitten(){

  return kittens.slice(1);

}
=======
destructivelyAppendKitten.push(name);
>>>>>>> 4abd6a6608f1b9a128e2da9e6f48aa6af7ea8884
