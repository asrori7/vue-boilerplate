export default {
  isLogin: state => state.token !== '' && state.token !== null && state.token !== undefined,
  token: state => state.token,
  name: state => state.user.name
}
