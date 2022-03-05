export const curry = (f) => {
    if (f.length == 1) {
        return f
    }

    const args = []
    return function curried(x) {
        args.push(x)

        return args.length == f.length
            ? f(...args)
            : curried
    }
}

export const apply = (f) => (args) => {
    if (args.length <= f.length) {
        return f(...args)
    }

    let argsToApply = []

    for (let i = 0; i < f.length; i++) {
        argsToApply.push(args.pop())
    }

    const result = f(...argsToApply)

    return typeof result === 'function'
        ? apply(result)(args)
        : result
}

export const memo = (f) => {
    const args = new Map()

    return (x) => {
        if (args.has(x)) return args.get(x)

        const result = f(x)
        args.set(x, result)
        return result
    }
}