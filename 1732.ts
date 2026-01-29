function largestAltitude(gain: number[]): number {
    let doCao : number[] = [];

    let x : number = 0;
    doCao.push(x);
    for (let i : number = 0; i < gain.length; i++) {
        x += gain[i]!;
        doCao.push(x);
    }
    
    return Math.max(...doCao);
};