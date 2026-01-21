function mergeAlternately(word1: string, word2: string): string {
    let max : number = (word1.length > word2.length) ? word1.length : word2.length;
    let min : number = (word1.length > word2.length) ? word2.length : word1.length;

    let chuoi : string = "";
    for (let i = 0; i < min; i++) {
        chuoi += word1[i];
        chuoi += word2[i];
    }

    let xauCanChon = (word1.length == max) ? word1 : word2;

    for (let i = min; i < max; i++) {
        chuoi += xauCanChon[i];
    }
    return chuoi;
};