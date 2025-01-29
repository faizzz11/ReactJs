import React, {useEffect} from 'react'

const Navbar = (props) => {
    useEffect(() => {
    alert("color badal diya")
    
    }, [props.color])
    
  return (
    <div>
        my fav navbar color is {props.color}
    </div>
  )
}

export default Navbar
