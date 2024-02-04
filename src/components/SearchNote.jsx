"use client"

import { Search } from 'lucide-react'
import { useAtom } from 'jotai'
import { searchNoteAtom } from '@/atoms/atoms'

export const SearchNote = () => {
    const [searchNote, setSearchNote] = useAtom(searchNoteAtom)
    
    function handleSearchNote(e) {
        setSearchNote(e.target.value)
      }

  return (
        <div className="search">
			<input value={searchNote}
				onChange={handleSearchNote}
				placeholder='Type to search...'
			/>
            <div className="mr-4">
            <Search />
            </div>
        </div>
  )
}
