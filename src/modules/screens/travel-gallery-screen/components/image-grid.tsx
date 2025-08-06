import React from 'react'
import { Masonry } from 'masonic';

const ImageGrid = ({places}: any) => {
  return (

<Masonry
  items={places}
  columnGutter={0}
  columnCount={3}
  render={({ data }:any) => (
    <div className="image-card">
      <img src={data.image} alt={data.title} />
      <div className="image-tag">{data.title}</div>
    </div>
  )}
/>

  )
}

export default ImageGrid