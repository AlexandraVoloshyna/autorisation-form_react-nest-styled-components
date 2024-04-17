export interface ICard {
    createdAt: Date;
    updatedAt: Date;
    id:string;
    img: string;
    title: string;
    yield: number;
    sold: number; 
    ticket: number;
    days: number;
    price: number;
}
export interface IResponse<T>  {
    data: T 
    message: string
}
export interface IUser {
    email: string;
    password:string
}