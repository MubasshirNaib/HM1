import React from 'react'

const Slider = () => {
      
        
    const data = [
        {
          imageLink:
            "https://i.ibb.co/RhHz2nX/North2.jpg",
        },
        {
          imageLink:
            "https://i.ibb.co/n1MJx7k/North1.jpg",
        },
        {
          imageLink:
            "https://i.ibb.co/2M2qSNB/1-1.jpg",
        },
        {
          imageLink:
            "https://i.ibb.co/Fn8fK7d/1-2.jpg",
        },
        {
          imageLink:
            "https://i.ibb.co/WcGC3CS/1-3.jpg",
        },
        {
          imageLink:
            "https://i.ibb.co/dMfBJSB/1-4.jpg",
        },
        {
          imageLink:
            "https://i.ibb.co/9GfwcFx/1-5.jpg",
        },
        {
          imageLink:
            "https://i.ibb.co/k63sN3r/1-6.jpg",
        },
        {
          imageLink:
            "https://i.ibb.co/N3Y179L/1-8.jpg",
        },
      ];
     
      return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mt-6">
          {data.map(({ imageLink }, index) => (
            <div key={index}>
              <img
                className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                src={imageLink}
                alt="gallery-photo"
              />
            </div>
          ))}
        </div>
      )
}

export default Slider