// ini kumpulan fect data

import { getData } from "./utils"

export const testApi = async () => {
    return await getData(`/`)
}