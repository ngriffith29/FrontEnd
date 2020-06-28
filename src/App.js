import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Iterator from './components/Iterator'
export default function App() {
  const [insta, setinsta] = useState([]);
  const [twitter, setTwitter] = useState([])
  useEffect(() => {
   axios.get('https://instgraphi.herokuapp.com/hashtag_recent_media/dogs')
   .then(res => {setinsta(res.data) })
   axios.get('https://hashersildertwitter.herokuapp.com/tweets?numOTweets=1&searchTerm=dogs')
   .then(res =>  {setTwitter(res)})
   //
  },[])

  return (
    <div className="high">
      <h1>Hash Slide</h1>
      <Iterator insta={insta} twitter={twitter} />
    </div>
  )
}
