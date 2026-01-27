function moveZeroes(nums: number[]): void {
    let k : number = 0;
    for (let i : number = 0; i < nums.length; i++) {
        if (nums[i] !== 0){
            nums[k] = nums[i];
            if (k !== i) nums[i] = 0;
            k++;
        }
    }
};