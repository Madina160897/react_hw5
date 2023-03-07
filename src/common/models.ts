export interface IUser {
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
}

export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}