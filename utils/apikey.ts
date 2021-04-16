import supabase from '@utils/database'
import { Key } from "@utils/api.types";
export default async function (headers: any) {
    // console.log(headers)
    let apikey = headers["authorization"]
    if (!apikey) return {
        success: false,
        message: "You have not passed an API Key into the Authorization Header."
    }

    let { data: data_key, error: key_error } = await supabase.from<Key>("apikeys").select().eq('key', apikey)

    if (data_key?.length === 0) {
        return {
            success: false,
            message: "You are not Authorized to use this API."
        }
    }

    return {
        success: true,
        data: {
            // @ts-ignore
            owner: data_key[0].owner,
            // @ts-ignore
            reason: data_key[0].reason,
            // @ts-ignore
            id: data_key[0].id,
        }
    }

}