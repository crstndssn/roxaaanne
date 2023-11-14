import React, { useEffect, useState } from "react";
// Import Swiper React components
// import { Pagination } from 'swiper'
// import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'



// import 'swiper/swiper.min.css'
// import 'swiper/modules/pagination/pagination.min.css'


const Card = (props) => {



  const imageLinks = useState(props.images)

  // const [imageLinks, setimageLinks] = useState(props.images)

  // setimageLinks([...imageLinks,props.images])
  const title = useState(props.title)
  const description = useState(props.text)


  // console.log(imageLinks)  



  // const addText = (text) => {
  //   const contetPost = text

  // } 


  return (
    <div className="card">
      <div className="card__content-image">
        <img className="card__image" src={imageLinks[0][0]} loading="lazy" />
      </div>
      {/* <h2 className="card__title">{title}</h2> */}
    </div>
  )
}

export default Card