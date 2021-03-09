import authHeader from './auth-header';

const API_URL = `${process.env.NEXT_PUBLIC_API_ROOT_URL}api/`;

class UserService {
  getPublicContent(param) {
    fetch(API_URL + param)
    .then(r => r.json())
    .then(body => {
      return body
    })
  }

  getAdminContent(param) {
    fetch(API_URL + param, { headers: authHeader() })
    .then(r => r.json())
    .then(body => {
      return body
    })
  }

  // getUserBoard() {
  //   return axios.get(API_URL + 'user', { headers: authHeader() });
  // }

  // getModeratorBoard() {
  //   return axios.get(API_URL + 'mod', { headers: authHeader() });
  // }

  // getAdminBoard() {
  //   return axios.get(API_URL + 'admin', { headers: authHeader() });
  // }
}

export default new UserService();