import { $host } from ".";

export const fetchPages = async (page, limit) => {
    const {data} = await $host.get('api/page', {
        params: {
            page, limit
        }
    });
    return data;
}