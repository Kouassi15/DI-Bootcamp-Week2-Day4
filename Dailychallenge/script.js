
/*Exercises*/
let wordList = prompt("Entrez votre liste de mots avec des virgules comme separateur");

let wordArray = wordList.split(",");


let maxLength = 0;

let wordStar = '';

wordArray.forEach((y)=>{

    if(maxLength < y.length)
    {
        maxLength = y.length
    }
});

maxStartLength = maxLength + 4;
wordStar +=   "*".repeat(maxStartLength);
wordStar += "\n";
let space = '';

 for(let i=0; i < wordArray.length; i++)
{
    let spaceNumber = maxStartLength - wordArray[i].length - 3 ;
    space = ' '.repeat(spaceNumber)

    wordStar +=  "* " + wordArray[i] + space + "* \n";
}

wordStar = wordStar + "*".repeat(maxStartLength);

 console.log(wordStar);