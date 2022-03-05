import * as Maybe from './maybe.ren.mjs'

// CONSTRUCTORS ----------------------------------------------------------------
export const construct = (obj) => (args) => {
    return new obj(...args)
}

export const from_array = (arr) => {
    return Object.fromEntries(arr)
}

// TRANSFORMATIONS -------------------------------------------------------------
export const set = (key) => (value) => (obj) => {
    return { ...obj, [key]: value }
}

export const update = (key) => (f) => (obj) => {
    return key in obj
        ? { ...obj, [key]: f(obj[key]) }
        : obj
}

export const map = (f) => (obj) => {
    return Object.fromEntries(
        Object.entries(obj).map(([k, v]) => [k, f(k)(v)])
    )
}

export const filter = (f) => (obj) => {
    return Object.fromEntries(
        Object.entries(obj).filter(([k, v]) => [k, f(k)(v)])
    )
}

// QUERIES ---------------------------------------------------------------------
export const get = (key) => (obj) => {
    return key in obj
        ? Maybe.just(obj[key])
        : Maybe.nothing
}

export const has = (key) => (obj) => {
    return key in obj
}

// CONVERSIONS -----------------------------------------------------------------
export const keys = (obj) => {
    return Object.keys(obj)
}

export const values = (obj) => {
    return Object.values(obj)
}

export const to_array = (obj) => {
    return Object.entries(obj)
}
