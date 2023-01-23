import React from 'react'

const BannerName = ({name,discount,link}) => {
  return (
    <div className="bannerContent">
      <h3>hello {name}</h3>
      <p>
          Get free discount for every <span>${discount}</span> purcharse
      </p>
      <a href={link}>Learn More</a>
    </div>
  )
}

export default BannerName