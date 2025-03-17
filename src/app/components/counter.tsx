"use client"

import { useAuth } from "@clerk/nextjs";
// import { useAuth, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Counter = () => {

    const router = useRouter()

    // const { isLoaded, userId, isSignedIn, sessionId, getToken } = useAuth()
    const { isLoaded, isSignedIn } = useAuth()

    console.log("Counter component");
    const [count, setCount] = useState(0);

    if (!isLoaded || !isSignedIn) {
        return <div>
            <div>Please SignIn to test features : </div>
            <p>1. Counter</p>
            <p>2. Mocked Users List</p>
        </div>
    }

    return (
        <>
            <div>Clicked Counter : { count }</div>
            <div>
                <button
                    onClick={ () => setCount(count + 1) }
                    className="bg-blue-500 text-white p-2 rounded-md cursor-pointer mr-3"
                >
                    Counter (+)
                </button>
                <button
                    onClick={ () => setCount(count - 1) }
                    className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
                >
                    Counter (-)
                </button>
            </div>

            <button
                onClick={ () => router.push("/mock-users") }
                className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
            >
                Check Mock Users List
            </button>
        </>
    );
};
