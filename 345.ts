function reverseVowels(s: string): string {

    const vowels : string = "aeuioAEUIO";
    let mang : string[] = s.split("");
    let layVowels : string[] = [];
    let a : number[] = [];

    for (let i = 0; i < mang.length; i++) {
        if (vowels.indexOf(mang[i]) !== -1) {
            layVowels.push(mang[i]);
            a.push(i);
        }
    }

    layVowels.reverse();

    for (let i = 0; i < a.length; i++) {
        mang[a[i]] = layVowels[i];
    }
    return mang.join("");
};