"use client"

// import { cookies } from 'next/headers'
// const LOGIN_URL = "http://127.0.0.1:8000/api/token/pair"

const LOGIN_URL = "/api/login/"

export default function Page() {

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