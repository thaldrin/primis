import nodecache from 'node-cache'
import supabase from "@utils/database";
import routes from "@utils/routes";
import chalk from 'chalk'
import { Image } from "@utils/api.types";

const cache = new nodecache({
    stdTTL: 60
})
// @ts-ignore
cache.on("set", (key, value) => {

    console.log(`Updated /${chalk.red(key)} with latest data`)

})

function update_cache(data: any, route: string) {
    cache.set(route, data)
}

export async function getdata() {
    routes.forEach(async (route) => {
        let { data } = await supabase.from<Image>('images').select().eq("folder", route)

        update_cache(data, route)
    })

}

// @ts-ignore
let UpdateInterval = setInterval(async () => {
    console.log("Updating Cache")
    await getdata()
}, 60 * 1000)

getdata()
export default cache
