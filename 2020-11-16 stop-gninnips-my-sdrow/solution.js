// solution to "Stop gninnipS My sdroW!"

function spinWords(sentence){
    // "words" is the sentence split into words
    // "output" is the output string
    let words = sentence.split(" ");
    let output = ""
    
    // function to reverse the string
    // splits the string to an array of characters, 
    // reverses their order, and joins them back
    // returns the reversed string
    function reverse(str) {
        let split_str = str.split("");
        let reverse_str = split_str.reverse();
    
        return reverse_str.join("");
    }
    
    // appends reversed word if the length is greater than 5 
    // otherwise. append unchanged word
    words.forEach(word => {
        (word.length >= 5) ? (output += (reverse(word) + " ")) : (output += (word + " "))
    });

    // removes trailing space
    return output.slice(0, -1);
}