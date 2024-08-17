import React from 'react'

function Pagination({setSize, setPage,count, page ,size}) {
  
  function paginatePrev() { if (page > 1) {setPage(page - 1);}}
  function paginateNext() { if (page < count / size) {setPage(page + 1);}}

  return (
    <div className='wm-pagination'>
      <div className='wrapper-btns'>
        <button type="button" className='wm-bn-prev' onClick={()=> paginatePrev()} >Anterior</button>
        <button type="button" className='wm-bt-next' onClick={() => paginateNext()}>Próximo</button>
      </div>
      <div className="wrapper-size-req">
        <label htmlFor="size">QTD: </label>
        <select id="size" onChange={(e) => setSize(e.target.value)}>
          <option value="10">10</option>
          <option value="40">40</option>
          <option value="80">80</option>
          <option value="100">100</option>
        </select>
      </div>
      </div>
  )
}

export default Pagination