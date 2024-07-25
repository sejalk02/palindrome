function checkPalindrome() {
    const inputText = document.getElementById('inputText').value;
    const Text = inputText
        .replace(/[^a-zA-Z0-9]/g, '') 
        .toLowerCase(); 

    const reversedText = Text.split('').reverse().join('');

    const result = (Text === reversedText) ? 
        "It's a palindrome!" : "Not a palindrome.";

    document.getElementById('result').innerText = result;
}
