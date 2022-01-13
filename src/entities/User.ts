export interface authenticationData {
    id: string;
}

export interface userCredentials {
    email: string;
    password: string;
}

export interface user extends authenticationData, userCredentials {
    name: string;
}

export interface SignupInputDTO {
    name: string;
    email: string;
    password: string;
}

export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
}

