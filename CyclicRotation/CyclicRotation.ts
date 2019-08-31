const cyclicRotation = (arr: number[], k: number): number[] => {
    k = k % arr.length

    while (k > 0) {
        const toShift = arr.pop()
        arr.unshift(toShift)
        k -= 1
    }

    return arr
}

cyclicRotation([3,4,6,7,8], 100)
cyclicRotation([3,4,6,7,8], 106)