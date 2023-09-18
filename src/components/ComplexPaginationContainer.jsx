import { useLoaderData, useNavigate, useLocation } from "react-router-dom";

const ComplexPaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  const {search, pathname} = useLocation()
  const navigate = useNavigate()
console.log(search)
console.log(pathname)
 
  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search)
    searchParams.set('page', pageNumber)
   navigate(`${pathname}?${searchParams.toString()}`)
  };

  if (pageCount < 2) return null;

  return (
    <div className="mt-16 flex ">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let prevPage = page - 1
            if(prevPage < 1) prevPage = pageCount
            handlePageChange(prevPage);
          }}
        >
          Prev
        </button>
        {pages.map((pageNumber) => {
          console.log(pageNumber)
          return (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`btn btn-xs sm:btn-md border-none join-item 
              ${pageNumber === page ? 'bg-base-300 border-base-300' : ''}`}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let nextPage = page + 1
            if(nextPage < 1) nextPage = pageCount
            handlePageChange(nextPage);
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default ComplexPaginationContainer