let BinaryGap = (n: number): number => {

    let count: number = 0
    let maxCount: number = 0
    let hasGap: boolean = false

    while (n > 1) {
        const remainder: number = n % 2
        n = Math.floor(n / 2)
        if (remainder === 1) {
            hasGap = true
            count = 0
        } else if (hasGap && remainder === 0) {
            count += 1
            maxCount = Math.max(maxCount, count)
        }
    }

    return maxCount
}

BinaryGap(1041)
BinaryGap(32)