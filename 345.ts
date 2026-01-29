function reverseVowels(s: string): string {

    const vowels : string = "aeuioAEUIO";
    let mang : string[] = s.split("");
    let layVowels : string[] = [];
    let a : number[] = [];

    for (let i : number = 0; i < mang.length; i++) {
        const so : string = mang[i]!;
        if (vowels.indexOf(so) !== -1) {
            layVowels.push(so);
            a.push(i);
        }
    }

    layVowels.reverse();

    for (let i : number = 0; i < a.length; i++) {
        const indx : number = a[i]!;
        mang[indx] = layVowels[i]!;
    }
    return mang.join("");
};

console.log(reverseVowels("lmao"));