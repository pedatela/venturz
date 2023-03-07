import { call, select, put, all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import { formatPrice } from '../../../util/format'
import api from '../../../services/api'
import history from '../../../services/history'

import { addToCartSuccess, updateAmountSuccess } from './action'

function* addToCart({ id, stock_count }) {

  const productExist = yield select(
    state => state.cart.find(p => p.id === id)
  )

  const stockAmount = stock_count
  const currentAmount = productExist ? productExist.amount : 0
  const amount = currentAmount + 1

  if (amount > stockAmount) {
    toast.error('Quantidade Solicitada fora do Estoque')
    return
  }

  if (productExist) {
    yield put(updateAmountSuccess(id, amount))
  } else {
    const response = yield call(api.get, `/books/${id}`)
    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.data.price)
    }
    yield put(addToCartSuccess(data))
    history.push('/cart')
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;
  const stock = yield call(api.get, `/books/${id}`)
  const stockAmount = stock.data.data.stock_count

  if (amount > stockAmount) {
    toast.error('Quantidade Solicitada fora do Estoque')
    return
  }
  yield put(updateAmountSuccess(id, amount))
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount)
]);