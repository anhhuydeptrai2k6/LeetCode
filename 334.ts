function increasingTriplet(nums: number[]): boolean {
    let i: number = Infinity;
    let j: number = Infinity;

    for (let n of nums) {
        if (n <= i){
            i = n;
        }
        else if (n <= j){
            j = n;
        }
        else {
            return true;
        }
    }
    return false;
}