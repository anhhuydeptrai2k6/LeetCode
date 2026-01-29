function compress(chars: string[]): number {
    let write : number = 0;
    let dem : number = 1;

    for (let i : number = 0; i < chars.length; i++) {
        if (i + 1 < chars.length && chars[i] === chars[i + 1]) {
            dem++;
        } else {
            chars[write++]! = chars[i]!;
            if (dem > 1) {
                for (let c of dem.toString()) {
                    chars[write++] = c;
                }
            }
            dem = 1;
        }
    }

    return write;
}
