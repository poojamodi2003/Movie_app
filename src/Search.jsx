import React, { useRef } from 'react'

function Search({query, handler }) {

  const inpRef = useRef();

  const changeHandler = () => {
    handler(inpRef.current.value);
  }

  return (
    <>
      <div className="parentOfsearch">
        <div className="search">
          <input type="search" name='name' placeholder='Enter movie name' value={query} onChange={changeHandler} ref={inpRef} />
          <label htmlFor="name" >search</label>
        </div>
      </div>

    </>
  )
}

export default Search