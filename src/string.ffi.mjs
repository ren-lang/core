// CONSTRUCTORS ----------------------------------------------------------------
export const join = (sep) => (arr) => {
    return arr.join(sep)
}

export const from_array = (arr) => {
    return arr.join('')
}

// TRANSFORMATIONS -------------------------------------------------------------
export const reverse = (str) => {
    return Array.from(str).reverse().join('')
}

// CONVERSIONS -----------------------------------------------------------------
export const split = (sep) => (str) => {
    return str.split(sep)
}

export const lines = (str) => {
    return str.split(/\n+/)
}

export const words = (str) => {
    return str.split(/\s+/)
}

export const to_array = (str) => {
    return Array.from(str)
}