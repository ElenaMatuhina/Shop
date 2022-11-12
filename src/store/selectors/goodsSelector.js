export const selectAllGoods = ((state) => state.goodsList.goods);

export const selectGoodsInfo = (state) => ({
  status: state.goodsList.status,
  error: state.goodsList.error,
  quantity: state.goodsList.goods.length,
});
