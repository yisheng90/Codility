const oddOccurenceInarray = (arr: number[]): number => {
    const dict = {}

    arr.forEach(num => {
        if (dict[num]) {
            delete dict[num]
        } else {
            dict[num] = 1
        }

    })

    return parseInt(Object.keys(dict)[0])
}

oddOccurenceInarray([9, 3, 9, 3, 9, 7, 9])