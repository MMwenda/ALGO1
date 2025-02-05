function analyzeSentence(sentence) {  
    
    let lengthCounter = 0;  
    let wordCounter = 0;     
    let vowelCounter = 0;  

    const vowels = 'aeiouAEIOU';  

   
    for (let i = 0; i < sentence.length; i++) {  
        const char = sentence[i];  
        lengthCounter++;  

       
        if (vowels.includes(char)) {  
            vowelCounter++;  
        }  

    
        if (char === ' ' && i > 0 && sentence[i - 1] !== ' ') {   // if the character is a space and the previous character is not a space then it is a word
            wordCounter++;  
        }  
    }  

    if (lengthCounter > 0 && sentence[lengthCounter - 1] === '.') {  // if the last character is a period then it is a word
        wordCounter++; 
    }  

     
    return {  
        length: lengthCounter,
        words: wordCounter,  
        vowels: vowelCounter  
    };  //return the length of the sentence, the number of words, and the number of vowels as an object

    
}  

console.log(analyzeSentence('Mock sentence of you reading a sentence.'));  // { length: 40, words: 7, vowels: 14}

