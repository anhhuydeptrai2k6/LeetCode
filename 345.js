function reverseVowels(s) {
    var vowels = "aeuioAEUIO";
    var mang = s.split("");
    var layVowels = [];
    var a = [];
    for (var i = 0; i < mang.length; i++) {
        if (vowels.indexOf(mang[i]) !== -1) {
            layVowels.push(mang[i]);
            a.push(i);
        }
    }
    layVowels.reverse();
    for (var i = 0; i < a.length; i++) {
        mang[a[i]] = layVowels[i];
    }
    return mang.join("");
}
;
