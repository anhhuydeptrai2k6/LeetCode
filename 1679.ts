function maxOperations(nums: number[], k: number): number {
    let soLan : number = 0;

    nums.sort((a, b) => a - b);
    let left : number = 0;
    let right: number = nums.length - 1;
    while (left < right) {
        const sum : number = (nums[left]! + nums[right]!);
        if (sum === k){
            soLan ++;
            left ++;
            right --;
        } else if (sum < k){
            left ++;
        } else {
            right --;
        }
    }

    return soLan;
}
