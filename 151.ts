function reverseWords(s: string): string {
    let cacTu : string[] = s.split(" ");
    let tu : string[] = [];
    for (let i = 0; i < cacTu.length; i++) {
        if (cacTu[i] !== ""){
            tu.push(cacTu[i]!);
        }
    }
    tu.reverse();
    return tu.join(" ");
};