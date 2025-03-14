"use server"

import { NextResponse } from "next/server";
import { setToken, setRefreshToken } from "@/app/lib/auth";

const DJANGO_API_LOGIN_URL = "http://127.0.0.1:8000/api/token/pair"

export async function POST(request) {
    const requestData = await request.json()
    
    const jsonData = JSON.stringify(requestData)
    const requestOptions = {
        method : "POST",
        headers : {
            "Content-Type": "application/json"
        },
        body : jsonData
    }
    const response = await fetch(DJANGO_API_LOGIN_URL, requestOptions)
    const responseData = await response.json()
    if (response.ok) {
        const {access, refresh} = responseData
        await setToken(access)
        await setRefreshToken(refresh)
        return NextResponse.json({"LoggedIn": true}, {status : 200})
    }
   
    return NextResponse.json({"LoggedIn": false, ...responseData}, {status: 400})
}