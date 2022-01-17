export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}

export type Post = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    creationDate: Date,
    userId: string
}

export interface createPostInputDTO {
    photo: string,
    description: string,
    type: POST_TYPES,
    token: string
}