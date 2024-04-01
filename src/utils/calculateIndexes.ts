export const calculateIndexes = (
  page: number,
  limit: number,
  total: number
) => {
  const indexStart = (page - 1) * limit + 1; // Tính index bắt đầu của page
  const indexEnd = Math.min(page * limit, total); // Tính index cuối cùng của page
  const totalPage = Math.ceil(total / limit); // Tính tổng số page

  return [indexStart, indexEnd, totalPage];
};
