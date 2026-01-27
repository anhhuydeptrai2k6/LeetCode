function isSubsequence(s: string, t: string): boolean {
    let dem : number = 0;

    for (let i : number = 0; i < t.length; i++) {
        if (s[dem] === t[i]) {
            dem += 1;
        }
    }
    return dem === s.length;
};