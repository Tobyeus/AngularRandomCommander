export interface Card {
    name: String,
    uri: String,
    image_uris: {
        small: string,
        normal: string,
        large: string,
        border_crop: string
    }
}