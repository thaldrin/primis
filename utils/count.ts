import cache from "@utils/cache"
export default function (category: string) {
    // @ts-ignore
    let data: object[] = cache.get(category)
    if (data === undefined) data = []
    return data.length
}