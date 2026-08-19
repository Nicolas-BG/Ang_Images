export interface ImageData {
    id?: number,
    title: string,
    description: string,
    image: string,
    created_at?: string,
    updated_at?: string,
    comments?: [{ text:string, username:string }]
    created_at_formatted?: string,
}