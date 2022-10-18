// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    const newCats = [...cats, name]
    return newCats
}

function prependCat(name){
    const preCats = [name, ...cats]
    return preCats
}
function removeLastCat(){
    const newKitty = cats.slice(0,-1)
    return newKitty
}
function removeFirstCat(){
    const newCats = cats.slice(1,cats.length)
    return newCats
}