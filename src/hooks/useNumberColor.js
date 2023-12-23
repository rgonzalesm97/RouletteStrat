import { roulette } from "../util/util";

export function useNumberColor({ number }) {
    const element = roulette.find(e => e.number === number)

    return element ? element.color : "black"
}