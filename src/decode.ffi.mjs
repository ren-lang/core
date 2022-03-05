import * as Maybe from './maybe.ren.mjs'

export const parse_string = (str) => {
    try {
        return Maybe.just(JSON.parse(str))
    } catch {
        return Maybe.nothing
    }
}
