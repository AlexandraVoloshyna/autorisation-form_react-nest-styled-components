import { ICard, IResponse, IUser } from "../types"
import { apiSlice } from "./api.slice"
const USERS_URL = "/api/user"
const CARDS_URL = "/api/cards"

const appApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<IResponse<string>, IUser>({
      query: (data)=> ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: data

      }),
           
    }),
    registration: builder.mutation<IResponse<void>, IUser>({
      query: (data)=> ({
        url: `${USERS_URL}/register`,
        method: "POST",
        body: data
      }),
    }),
    getCards: builder.query<IResponse<ICard[]>, void>({
      query: ()=> ({
        url: `${CARDS_URL}` }),
    }),
  })
})

export const {
  useLoginMutation,
  useRegistrationMutation, 
  useGetCardsQuery
} = appApiSlice