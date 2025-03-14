"use client"

import { useRouter } from "next/navigation"

const LOGIN_URL = "/api/login/"

export default function Page() {
    const router = useRouter()

    async function handleSubmit (event) {
        event.preventDefault()
        console.log(event, event.target)
        const formData = new FormData(event.target)
        const objectFromForm = Object.fromEntries(formData)
        const jsonData = JSON.stringify(objectFromForm)
        const requestOptions = {
            method : "POST",
            headers : {
                "Content-Type": "application/json"
            },
            body : jsonData
        }
        const response = await fetch(LOGIN_URL, requestOptions)
        const data = await response.json()
        console.log(data)
        if (response.ok) {
            console.log("logged in!")
            router.replace("/")
        }
        
    }

    return  <div className="h-[95vh]">
        <div className="max-w-mad max-auto py-5">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Your username" required/>
                <input type="password" name="password" placeholder="Enter your password" required/>

                <button type="submit">Login</button>
            </form>
        </div>
    </div>
}