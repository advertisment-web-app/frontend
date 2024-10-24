


const Pagination = ({adsPerPage,length,handlePagination}) => {
  const paginationNumbers=[];

  for(let i=1;i<=Math.ceil(length/adsPerPage);i++){
    paginationNumbers.push(i);
   
  }

  return (
    <div className="flex border-[white] border-[1px] justify-between p-[20px]">
      {paginationNumbers.map((pageNumber) => (
        <button
          className="p-[10px] bg-[#9932CC] rounded-lg text-white"
          key={pageNumber}
          onClick={() => handlePagination(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;