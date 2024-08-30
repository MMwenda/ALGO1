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

    
        if (char === ' ' && i > 0 && sentence[i - 1] !== ' ') {  
            wordCounter++;  
        }  
    }  

    if (lengthCounter > 0 && sentence[lengthCounter - 1] === '.') {  
        wordCounter++; 
    }  

     
    return {  
        length: lengthCounter - 1,
        words: wordCounter,  
        vowels: vowelCounter  
    };  
}  

