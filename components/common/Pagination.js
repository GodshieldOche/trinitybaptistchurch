import React from 'react'
import { useRouter } from 'next/router'
import Head from "next/head";
import Paginate from 'react-js-pagination'

const Pagination = ({ resPerPage, page, totalItems, keyword }) => {

    const router = useRouter()

    const handlePagination = (pageNumber) => { 
        keyword ?
            router.push(`${router.route}?keyword=${keyword}&page=${pageNumber}`)
            :
            // router.push(`${router.route}?page=${pageNumber}`)
            router.push({
                pathname: router.pathname,
                query: {
                    ...router.query,
                    page: pageNumber
                },
            })
    }


    return (
        <div>
            <Paginate
                activePage={page}
                itemsCountPerPage={resPerPage}
                totalItemsCount={totalItems}
                onChange={handlePagination}
                pageRangeDisplayed={3}
                innerClass='border border-gray-300/90 flex rounded-r-lg rounded-l-lg'
                activeClass='bg-[#0d6efd]'
                itemClass='border-r border-gray-300/90 py-1 px-4'
                linkClass='text-[#0d6efd]'
                itemClassLast="!border-r-0 "
                activeLinkClass="!text-[#ffffff]"
            />  
        </div>
           
  )
}

export { Pagination}
