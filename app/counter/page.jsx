"use client";
import React,{useState} from "react";
import Profile from "./profile";

// New method functional component 
export default function Counter() {
    
    const[count , setCount] = useState(0);
    return (
        <div className="flex flex-col justify-center items-center min-h-screen gap-4">
          <p>Count: {count}</p>
          <button
            onClick={() => setCount(count + 1)}
            className="border border-primary py-1 px-2 text-sm rounded-2xl"
          >
            Increment
          </button>
          <Profile />
        </div>
      );
}