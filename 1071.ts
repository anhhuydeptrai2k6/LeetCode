function gcdOfStrings(str1: string, str2: string): string {
    let uocChung : string = "";

    const tong1 : string = str1 + str2;
    const tong2 : string = str2 + str1;

    if (tong1 !== tong2) return uocChung;

    const uoc : number = gcd(str1.length, str2.length);

    for (let i = 0; i < uoc; i++) {
        uocChung += str1[i];
    }
    return uocChung;
};

function gcd(a: number, b: number): number {
    return b === 0 ? Math.abs(a) : gcd(b, a % b);
}