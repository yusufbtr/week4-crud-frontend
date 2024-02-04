"use client"

import { Pencil, Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from "react-hot-toast"

export const Note = ({item}) => {
    const router = useRouter()
    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState(item.title)
    const [description, setDescription] = useState(item.description)
    const date = new Date();

    async function handleDelete(){
        const res = await fetch("https://v1.appbackend.io/v1/rows/i4KPV2cSTBe1", {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
                    },
            body: JSON.stringify([item._id])
        })
        const data = await res.json()
        console.log(data)
        router.refresh()
        toast.success("Note successfully deleted")

    }

    async function handleUpdate(){
        const res = await fetch("https://v1.appbackend.io/v1/rows/i4KPV2cSTBe1", {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
                    },
            body: JSON.stringify({_id: item._id, title, description, created_date:date.toLocaleDateString()})
        })
        const data = await res.json()
        console.log(data)
        router.refresh()
        setEditMode(false)
        toast.success("Note successfully updated")
    }

    if(editMode){
        return (
        <main className="space-y-2 p-4 rounded-md bg-[#f5eb61]">
            <h3 className="font-semibold text-lg">Edit Note</h3>
            <input className="bg-[#d1c954] border-transparent" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <textarea className="bg-[#d1c954] text-sm" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <button onClick={handleUpdate}>Update</button>
            <button
            onClick={() => setEditMode(false)}>Cancel</button>
        </main>
        )
    }

  return (
    <div className="note">
        <p className="font-semibold text-lg">{item.title}</p>
        <p className="text-sm p-2 pr-1 py-1 whitespace-break-spaces break-words">{item.description}</p>
        <div className="note-footer">
            <div className="relative">
                <small className="absolute inset-x-0 bottom-0">{item.created_date}</small>
            </div>
            <div className="flex justify-end">
                <button><Pencil className="" onClick={()=> setEditMode(true)}/></button>
                <button><Trash2 onClick={handleDelete}/></button>
            </div>
        </div>
    </div>
  )
}
