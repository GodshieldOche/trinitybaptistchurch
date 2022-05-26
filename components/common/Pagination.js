import React from 'react'

const Pagination = ({ resPerPage, page, totalItems }) => {
    const lastPage = Math.ceil(totalItems / resPerPage)
    const nextPage = page + 1
    const prevPage = page - 1
    const hasNextPage = resPerPage * page < totalItems
    const hasPrevPage = page > 1


  return (
      <div className="flex border text-sm font-medium border-primary-dark">
          {
              page !== 1 && prevPage !== 1 &&
                <h1 className='px-3 cursor-pointer hover:text-white hover:bg-primary-dark/40 py-1 border-r border-primary-dark'>
                    1
                </h1> 
          }
          {
              hasPrevPage &&
                <h1 className='px-3 py-1 cursor-pointer hover:text-white hover:bg-primary-dark/40 border-r border-primary-dark'>
                    {prevPage}
                </h1>
          }
                <h1 className='px-3 py-1 cursor-pointer bg-primary-dark text-white border-primary-dark'>
                    {page}
                </h1>
          {
              hasNextPage &&
                <h1 className='px-3 py-1 cursor-pointer hover:text-white hover:bg-primary-dark/40 border-r border-primary-dark'>
                      {nextPage}
                </h1>
          }
          {
              lastPage !== page && nextPage !== lastPage &&
                <h1 className='px-3 py-1 cursor-pointer hover:text-white hover:bg-primary-dark/40 '>
                  {lastPage}
                </h1>
          }
         
    </div>
  )
}

export default Pagination