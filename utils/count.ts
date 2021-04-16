import supabase from "@utils/database"
import { Image } from "@utils/api.types";

export default async function (category: string) {
    return await (await supabase.from<Image>('images').select('*', { count: "exact" }).eq("folder", category)).count
}

// await (await supabase.from<Image>('images').select('*', { count: "exact" }).eq("folder", "foxes")).count