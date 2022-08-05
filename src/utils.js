const paginate = (page, perPage, data) => {
  return data.slice((page - 1) * perPage, page * perPage);
};

export default paginate;
