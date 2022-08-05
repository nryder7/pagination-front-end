const paginate = (itemsPerPage, data) => {
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const pageArr = Array.from({ length: pageCount }).map((item, index) => {
    const start = index * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  });
  return { pageArr, pageCount };
};

export default paginate;
