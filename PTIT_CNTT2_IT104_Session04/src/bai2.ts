let mark: number[] = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];
let sum = 0;
for(let i = 0; i<mark.length; i++){
    sum+=mark[i];
}
console.log(sum/mark.length);