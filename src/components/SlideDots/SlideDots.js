import React from 'react'


const SlideDots = ({id, dot})=> {
    return(
        <>
            {
                id === dot ? 
                <li style={{background: "green"}}>
                    <span className="sr-only">
                        {dot}
                    </span>
                </li> : 
                <li style={{background: "#ccc"}}>
                    <span className="sr-only">
                        {dot}
                    </span>
                </li>}
        </>
    )
}

export default SlideDots