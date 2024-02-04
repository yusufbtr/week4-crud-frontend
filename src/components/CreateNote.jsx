"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from "react-hot-toast"

export const CreateNote = () => {
    const router = useRouter()
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [loading, setLoading] = useState(false)
    const date = new Date();

    async function handleCreateNote(){
        setLoading(true);
        const res = await fetch("https://v1.appbackend.io/v1/rows/i4KPV2cSTBe1", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
                    },
            body: JSON.stringify([{title,description, created_date:date.toLocaleDateString()}])
        })
        const data = await res.json()
        router.refresh()
        setLoading(false)
        toast.success("Note successfully created")
        setTitle("")
        setDescription("")
    }

  return (
    <main className="space-y-2 mb-8">
        <input className="border-solid border-2 rounded-md border-[#f2ea72]" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <textarea className="border-solid border-2 rounded-md border-[#f2ea72]"  placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        <button disabled={!title} onClick={handleCreateNote}>Create</button>
    </main>
  )
}
