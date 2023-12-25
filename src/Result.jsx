import React from 'react'

function Result({ data }) {

  const boxes = data.map(
    (d, i) => {
      return <Box {...d} key={i} />
    }
  )
  return (
    <div className='bigBox'>
      {boxes}
    </div>
  )
}

export default Result

const Box = (props) => {
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";
  return <div className='box' >
    <img src={IMGPATH + props.poster_path} alt="" />
  </div >
}