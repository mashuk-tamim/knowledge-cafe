import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import SpentTime from './components/SpentTime/SpentTime'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0);

  const  handleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (time, id) => {
    const TotalReadingTime = readingTime + time;
    setReadingTime(TotalReadingTime);

    //remove the read blog from bookmark
    console.log('remove bookmark:', id)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }
  return (
    <>
      <div className='w-11/12 mx-auto'>
        <Header></Header>
        <main className='md:flex gap-3'>
          <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead} className='w-2/3'></Blogs>
          <div className='flex flex-col gap-5 w-1/3'>
            <SpentTime readingTime={readingTime}></SpentTime>
            <Bookmarks bookmarks={bookmarks}></Bookmarks>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
