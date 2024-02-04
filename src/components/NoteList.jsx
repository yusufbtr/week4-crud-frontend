"use client"

import React from 'react'
import { Note } from './Note'
import { useAtom } from 'jotai'
import { searchNoteAtom } from '@/atoms/atoms'

export const NoteList = ({data}) => {

  const [searchNote] = useAtom(searchNoteAtom)

  var notes
  if (searchNote === ""){
    notes = data
  } else {
    notes = data.filter( x => x.title.toLowerCase().includes(searchNote) || x.description.toLowerCase().includes(searchNote))
  }
  return (
    <main className="notes-list">
      {notes.map((item) => {
        return (
            <Note key={item._id} item={item}/>
          )
      })}
  </main>
  )
}
