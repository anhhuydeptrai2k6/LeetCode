function pivotIndex(nums: number[]): number {
    let tongFull : number = 0;
    for (let i : number = 0; i < nums.length; i++) {
        tongFull += nums[i];
    }

    let tong : number = 0;
    for (let i : number = 0; i < nums.length; i++) {
        if (tong === tongFull - tong - nums[i]){
            return i;
        }
        tong += nums[i];
    }
    return -1;
};