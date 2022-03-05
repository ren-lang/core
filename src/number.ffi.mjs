import * as Maybe from './maybe.ren.mjs'

// CONSTRUCTORS ----------------------------------------------------------------
export const from_string = (str) => {
    const n = Number(str)

    return is_nan(n)
        ? Maybe.nothing
        : Maybe.just(n)
}

// CONSTANTS -------------------------------------------------------------------
export const pi = Math.PI
export const tau = pi * 2

// TRANSFORMATIONS -------------------------------------------------------------
export const floor = Math.floor
export const ceil = Math.ceil
export const round = Math.round

// QUERIES ---------------------------------------------------------------------
export const is_nan = (x) => {
    return isNaN(x)
}

// TRIGONOMETRY ----------------------------------------------------------------
export const sin = Math.sin
export const cos = Math.cos
export const tan = Math.tan
export const atan = Math.atan
export const atan2 = Math.atan2

// CONVERSIONS -----------------------------------------------------------------
export const to_string = (x) => {
    return String(x)
}