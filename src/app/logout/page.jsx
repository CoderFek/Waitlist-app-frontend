"use client"

import { useRouter } from "next/navigation"

// import { cookies } from 'next/headers'
// const LOGIN_URL = "http://127.0.0.1:8000/api/token/pair"

const LOGOUT_URL = "/api/logout/"

export default function Page() {
    const router = useRouter()

    async function handleClick (event) {
        event.preventDefault()
        
        const requestOptions = {
            method : "POST",
            headers : {
                "Content-Type": "application/json"
            },
            body : ""
        }
        const response = await fetch(LOGOUT_URL, requestOptions)
        if (response.ok) {
            console.log("logged out!")
            router.replace("/login")
        }
        
    }

    return  <div className="h-[95vh]">
        <div className="max-w-mad max-auto py-5">
            <h1>Are you sure you want to logout?</h1>
            <button className="bg-red-500 px-3 py-2 text-white hover:bg-red-300" onClick={handleClick}>Logout</button>
        </div>
    </div>
}