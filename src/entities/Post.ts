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

export interface getPostByIdInputDTO {
    id: string
}

export interface getPostByIdOutputDTO {
    photo: string,
    description: string,
    type: POST_TYPES,
    creationDate: Date
}

export const toPostModel = (obj: any):  Post => {
    return {
        id: obj.id,
        photo: obj.photo,
        description: obj.description,
        type: obj.type,
        creationDate: obj.creationDate,
        userId: obj.userId
    }

}