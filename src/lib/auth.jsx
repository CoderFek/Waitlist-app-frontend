import { cookies } from 'next/headers'

const TOKEN_AGE = 3600
const TOKEN_NAME = "auth-token"
const TOKEN_REFRESH_NAME = "auth-refresh-token"


export async function getToken () {
    // api request
    const myAuthToken = (await cookies()).get(TOKEN_NAME)
    return myAuthToken?.value
}

export async function getRefreshToken () {
    // api request
    const myAuthToken = (await cookies()).get(TOKEN_REFRESH_NAME)
    return myAuthToken?.value
}

export async function setToken (authToken) {
    //login
    return (await cookies()).set(
        {
            name: TOKEN_NAME,
            value: authToken,
            httpOnly: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV !== 'development',
            maxAge: TOKEN_AGE
        }
    )
}

export async function setRefreshToken (authRefreshToken) {
    //login
    
    return (await cookies()).set(
        {
            name: TOKEN_REFRESH_NAME,
            value: authRefreshToken,
            httpOnly: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV !== 'development',
            maxAge: TOKEN_AGE
        }
    )
}

export async function deleteToken () {
    //logout
    cookies().delete(TOKEN_REFRESH_NAME)
    return cookies().delete(TOKEN_NAME)
}