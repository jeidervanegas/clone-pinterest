import { useRef, useState } from 'react'
import { Header } from './components/Header'
import { createApi } from 'unsplash-js'
import { useEffect } from 'react'
import Masonry from '@mui/lab/Masonry'
import InfiniteScroll from 'react-infinite-scroll-component'
import imgageUser from './components/img/user.png'
// import { Card } from "@mui/material";
import { Card } from './components/Card'
import { useBookStore } from './store/bookStore'

const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: 'XBBNxcn9TFZREonqp8H_8AruwgctHWkDrQTi80eMD64'
  // acccessKey: import.meta.env.VITE_ACCESKEY
})

function App() {
  const [data, setData] = useState([])
  const [hasMore, setHasmore] = useState(true)
  let index = useRef(1);

  console.log('key:', import.meta.env.VITE_ACCESKEY);

  const val = useBookStore(state => state.value)
  console.log('data: ', data)
  console.log('val: ', val)

  useEffect(() => {

    index.current = 1;
    setHasmore(true)

    api.search
      .getPhotos({ query: val, perPage: 20, page:index.current})

      .then((result) => {
        setData(result.response.results)
      })
      .catch(() => {
        console.log('something went wrong!')
      })
  }, [val])

  const moreData = () => {

    index.current = index.current + 1;

    if(index.current === 3) {
      setHasmore(false)
    }

    api.search
    .getPhotos({ query: val, perPage: 20, page: index.current })
    .then((result) => {
      setData(data.concat(result.response.results))
    })
    .catch(() => {
      console.log('something went wrong!')
    })
  }

  return (
    <>
      <Header />

      <div className="w-[98%] m-auto pt-24 }">
        <InfiniteScroll
          dataLength={data.length}
          hasMore={hasMore}
          next ={moreData}
          loader={<h4>Loading...</h4>}
          style={{overflow: 'none'}}
        >
          <Masonry 
            columns={{xs: 2, sm: 3, md: 5}} 
            spacing={{xs: 1, sm: 2, md: 3}} 
            className="">
            {data.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </Masonry>
        </InfiniteScroll>
      </div>
    </>
  )
}

export default App
