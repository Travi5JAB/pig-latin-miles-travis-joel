console.log("connected");
var ogString = 'squeal'
var lower = ogString.toLowerCase()
var ay = 'ay'
var way = 'way'

function pigLatin(string) {

//vowel in 0
 if (string.charAt(0) === "e" || string.charAt(0) === "a" || string.charAt(0) === "i" || string.charAt(0) === "o" || string.charAt(0) === "u") {
   return string + way

 } else if (string.charAt(1) === "q" && string.charAt(2) === "u") {

   var newArr = lower.split('')
   var firstLetter = newArr.shift()
   var secondLetter = newArr.shift()
   var thirdLetter = newArr.shift()
   var newString = newArr.join('')
   var newPig = newString + firstLetter + secondLetter + thirdLetter + ay

   return newPig

 } else if (string.charAt(0) === "q" && string.charAt(1) === "u") {

 var newArr = string.split('')
 var firstLetter = newArr.shift()
 var secondLetter = newArr.shift()
 var newString = newArr.join('')
 var newPig = newString + firstLetter + secondLetter + ay

   return newPig
///3 cons words
 } else if (string.charAt(0) != "e" && string.charAt(0) != "a" && string.charAt(0) != "i" && string.charAt(0) != "o" && string.charAt(0) != "u" &&
 string.charAt(1) != "e" && string.charAt(1) != "a" && string.charAt(1) != "i" && string.charAt(1) != "o" && string.charAt(1) != "u" &&
 string.charAt(2) != "e" && string.charAt(2) != "a" && string.charAt(2) != "i" && string.charAt(2) != "o" && string.charAt(2) != "u") {

 var newArr = string.split('')
 var firstLetter = newArr.shift()
 var secondLetter = newArr.shift()
 var thirdLetter = newArr.shift()
 var newString = newArr.join('')
 var newPig = newString + firstLetter + secondLetter + thirdLetter + ay

   return newPig

 } else if (string.charAt(0) != "e" && string.charAt(0) != "a" && string.charAt(0) != "i" && string.charAt(0) != "o" && string.charAt(0) != "u" &&
 string.charAt(1) != "e" && string.charAt(1) != "a" && string.charAt(1) != "i" && string.charAt(1) != "o" && string.charAt(1) != "u") {

 var newArr = string.split('')
 var firstLetter = newArr.shift()
 var secondLetter = newArr.shift()
 var newString = newArr.join('')
 var newPig = newString + firstLetter + secondLetter + ay

   return newPig

 } else if (string.charAt(0) != "e" && string.charAt(0) != "a" && string.charAt(0) != "i" && string.charAt(0) != "o" && string.charAt(0) != "u") {

var newArr = string.split('')
var firstLetter = newArr.shift()
var newString = newArr.join('')
var newPig = newString + firstLetter + ay

   return newPig
}else{
    return "error!!!"
}
}

function buttonPress(){
    var Text1 = document.getElementById("Text1").value;
    document.getElementById("output").innerHTML = pigLatin(Text1)
}

// console.log(pigLatin(lower))
