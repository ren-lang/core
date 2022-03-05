import * as Maybe from './maybe.ren.mjs'

// CONSTRUCTORS ----------------------------------------------------------------
export const from = (a) => {
    return [a]
}

export const repeat = (length) => (a) => {
    return Array.from({ length }, (_) => a)
}

export const range = (start) => (length) => {
    return Array.from({ length }, (_, i) => start + i)
}

// TRANSFORMATIONS -------------------------------------------------------------
export const map = (f) => (arr) => {
    return arr.map((a) => f(a))
}

export const indexed_map = (f) => (arr) => {
    return arr.map((a, i) => f(i)(a))
}

export const each = (f) => (arr) => {
    arr.forEach((a) => f(a))
}

export const foldl = (f) => (b) => (arr) => {
    return arr.reduce((b, a) => f(a)(b), b)
}

export const foldr = (f) => (b) => (arr) => {
    return arr.reduceRight((b, a) => f(a)(b), b)
}

export const filter = (f) => (arr) => {
    return arr.filter((a) => f(a))
}

export const reject = (f) => (arr) => {
    return arr.filter((a) => !f(a))
}

export const flat = (arr) => {
    return arr.flat(1)
}

export const flat_map = (f) => (arr) => {
    return arr.map((a) => f(a)).flat(1)
}

// QUERIES ---------------------------------------------------------------------

export const head = (arr) => {
    return arr.length > 0
        ? Maybe.just(arr[0])
        : Maybe.nothing
}

export const tail = ([_, ...xs]) => {
    return xs
}

export const at = (i) => (arr) => {
    return i in arr
        ? Maybe.just(arr[i])
        : Maybe.nothing
}

export const length = (arr) => {
    return arr.length
}

export const any = (f) => (arr) => {
    return arr.some((a) => f(a))
}

export const all = (f) => (arr) => {
    return arr.every((a) => f(a))
}


export const isArray = Array.isArray