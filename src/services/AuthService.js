import BaseService from './BaseService'

class AuthService extends BaseService {
  /**
   * The constructor for the AuthService.
   *
   * @param {Object} parameters The query parameters.
   */
  constructor (parameters = {}) {
    super('oauth', parameters)
  }

  /**
   * Method used to login.
   *
   * @param {String} username The username.
   * @param {String} password The password.
   *
   * @returns {Promise} The result in a promise.
   */
  login ({ username, password }) {
    const data = {
      username,
      password,
      client_id: process.env.VUE_APP_CLIENT_ID,
      client_secret: process.env.VUE_APP_CLIENT_SECRET,
      grant_type: 'password',
      scope: ''
    }

    return this.submit('post', `${this.endpoint}/token`, data)
  }

  /**
   * Method used to get info the user.
   *
   * @param {Object} data The register data.
   *
   * @returns {Promise} The result in a promise.
   */
  infoUserLogin () {
    return this.submit('get', '/login-info')
  }

  /**
   * Method used to logout the user.
   *
   * @param {Object} data The logout data.
   *
   * @returns {Promise} The result in a promise.
   */
  logout () {
    return this.submit('post', `${this.endpoint}/logout`)
  }
}

export default AuthService
