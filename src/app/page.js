import { CreateNote } from "@/components/CreateNote";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { NoteList } from "@/components/NoteList";
import { SearchNote } from "@/components/SearchNote";

export const dynamic = 'force-dynamic' //bypass si cache

async function getData(){
  const res = await fetch("https://v1.appbackend.io/v1/rows/i4KPV2cSTBe1")
  const data = await res.json()
  return data
}

export default async function Home() {
  const {data} = await getData()
  // console.log(data);

  return (
    <main className="container p-4" >
      <Header />
      <CreateNote />
      <SearchNote />
      <NoteList data={data} />
      <Footer />
    </main>
  );
}
