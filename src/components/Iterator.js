import React, { useState } from 'react'

import "../components/style.css"
export default function Iterator(props) {

  console.log(props.insta)
  let slideImages = []
  // console.log(props.twitter)

  let instaVideo = props.insta.map((e) => {
    if (e.media_type === 'VIDEO' && e.media_url) {
      return (
   
        <div>


          <video controls width="500">

            <source src={e.media_url}
              type="video/webm" />


                Sorry, your browser doesn't support embedded videos.
            </video>



          </div>
        )
      }else {
        console.log(e)
      }
    })










    return (

        <div>
              {instaVideo}
            </div>
    )
}
