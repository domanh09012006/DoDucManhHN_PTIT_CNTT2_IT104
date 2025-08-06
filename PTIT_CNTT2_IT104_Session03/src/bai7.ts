let text: string = "banana";
let result: string = "";
for (let i = 0; i < text.length; i++) {
    if (result.indexOf(text[i]) === -1) {
        result += text[i];
    }
}
console.log(result);
