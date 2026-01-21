function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const max : number = Math.max(...candies);
    return candies.map(candy => candy + extraCandies >= max)
};