import React from 'react'
import { useRouter } from 'next/router'
import Head from "next/head";
import Paginate from 'react-js-pagination'

const Pagination = ({ resPerPage, page, totalItems }) => {
    // const lastPage = Math.ceil(totalItems / resPerPage)
    // const nextPage = page + 1
    // const prevPage = page - 1
    // const hasNextPage = resPerPage * page < totalItems
    // const hasPrevPage = page > 1

    const router = useRouter()

    const handlePagination = (pageNumber) => { 
        router.push(`/resources/sermons?page=${pageNumber}`)
    }


    return (
        <div>
            <Paginate
                activePage={page}
                itemsCountPerPage={resPerPage}
                totalItemsCount={totalItems}
                onChange={handlePagination}
                innerClass='border border-[#0d6efd]/50 flex rounded-r-lg rounded-l-lg'
                activeClass='bg-[#0d6efd]'
                itemClass='border-r border-[#0d6efd]/50 py-1 px-4'
                linkClass='text-[#0d6efd]'
                itemClassLast="!border-r-0 "
                activeLinkClass="!text-[#ffffff]"
            />  
        </div>
           
  )
}

export { Pagination}



{/* <div className="flex border text-primary-dark rounded-r-full rounded-l-full text-sm font-medium border-primary-dark">
//           <button */}
//               onClick={() => {
//                   router.push(`/resources/sermons?page=${prevPage}`)
//               }}
//               disabled={!hasPrevPage}
//               className="px-3 uppercase hover:bg-primary-dark/10 py-1 border-r border-primary-dark/60">
//               Prev
//           </button>
//           {
//               page !== 1 && prevPage !== 1 &&
//               <h1 onClick={() => router.push(`/resources/sermons?page=1`) }
//                   className={` px-4 cursor-pointer hover:bg-primary-dark/10 py-1 border-r border-primary-dark/60`}>
//                     1
//                 </h1> 
//           }
//           {
//               hasPrevPage &&
//               <h1 onClick={() => router.push(`/resources/sermons?page=${prevPage}`) }
//                   className='px-4 py-1 cursor-pointer hover:bg-primary-dark/10 border-r border-primary-dark/60'>
//                     {prevPage}
//                 </h1>
//           }
//                 <h1 onClick={() => router.push(`/resources/sermons?page=${page}`)} 
//                     className='px-4 py-1 cursor-pointer bg-primary-dark text-white border-r border-primary-dark/60'>
//                     {page}
//                 </h1>
//           {
//               hasNextPage &&
//                 <h1 onClick={() => router.push(`/resources/sermons?page=${nextPage}`) }
//                     className={`border-r px-4 py-1 cursor-pointer hover:bg-primary-dark/10  border-primary-dark/60`}>
//                       {nextPage}
//                 </h1>
//           }
//           {
//               lastPage !== page && nextPage !== lastPage &&
//                 <h1    onClick={() => router.push(`/resources/sermons?page=${lastPage}`) }
//                       className='px-4 py-1 cursor-pointer border-r border-primary-dark/60 hover:bg-primary-dark/10 '>
//                   {lastPage}
//                 </h1>
//           }
//           <button
//               onClick={() => {
//                   router.push(`/resources/sermons?page=${nextPage
// }`)
//               }}
//               disabled={!hasNextPage}
//               className="px-3 uppercase  cursor-pointer hover:bg-primary-dark/10 py-1 border-primary-dark/60">
//               Next
//           </button>
         
//     </div>