import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

interface customError {
    message: string
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fakeBaseQuery<customError>(),
    tagTypes: ["User"],
    endpoints: _builder => ({})
})