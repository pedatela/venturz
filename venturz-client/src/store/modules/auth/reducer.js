import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  is_seller: false,
  loading: false,
  name: ''
}

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token
        draft.is_seller = action.payload.user.is_seller
        draft.name = action.payload.user.name
        draft.signed = true
        draft.loading = false
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null
        draft.signed = false
        break;
      }
      default:
    }
  });
}