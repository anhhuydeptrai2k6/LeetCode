function productExceptSelf(nums: number[]): number[] {
    const answer: number[] = [];

    for (let i : number = 0; i < nums.length; i++) {
        answer[i] = 1;
    }

    let left : number = 1;
    for (let i : number = 0; i < nums.length; i++) {
        answer[i] = left;
        left *= nums[i];
    }

    let right : number = 1;
    for (let i : number = nums.length - 1; i >= 0; i--) {
        answer[i] *= right;
        right *= nums[i];
    }

    return answer;
}
