let s="hello world";

let words= s.split(" ");
let lastword = words[words.length-1];
console.log(words);

console.log(lastword.length)

let m="fly me to the moon"
let word= m.split(" ");
let lastwords = word[word.length-1];
console.log(word);

console.log(lastwords.length);

let word1 = 'listen'
  let  word2 ='silent'
    let sortedword1 = word1.split("").sort().join('')
    let sortedword2= word2.split("").sort().join('')

    if(sortedword1===sortedword2){
        console.log("true")

    }else{
        console.log("flase")
    }

    
let word3 = 'hello'
  let  word4 ='world'
    let sortedword3 = word3.split("").sort().join('')
    let sortedword4= word4.split("").sort().join('')

    if(sortedword3===sortedword4){
        console.log("true")

    }else{
        console.log("flase")
    }