import React from 'react'
import "./Carddd.css"

const Carddd = (props) => {
  return (
    <div className='card' style={{overflow:"hidden"}}> {/* used inline css here */}
        <img src="https://pbs.twimg.com/profile_images/1723603820289335296/xmoYsh67_400x400.jpg" alt="faizz" width={225} height={180} />
      <h1>{props.title}</h1> {/* learned how to use props */}
      <p>{props.desc}</p>
    </div>
  )
}

export default Carddd;
