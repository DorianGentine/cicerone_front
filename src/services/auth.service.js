const API_URL = `${process.env.NEXT_PUBLIC_API_ROOT_URL}api/auth/`;


const myHeaders = data => {
  return new Headers({ 
    'content-type': 'application/json',
    'content-length': data ? JSON.stringify(data).length.toString() : 0 
  })
}

class AuthService {
  login(data) {
    return fetch(API_URL + "login", {
      method: "POST",
      headers: myHeaders(data),
      body: JSON.stringify(data)
    })
    .then(r => r.json())
    .then(response => {
      if(response.token) {
        localStorage.setItem("user", JSON.stringify(response));
      }

      return response;
    });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(data) {
    return fetch(API_URL + "signup", {
      method: "POST",
      headers: myHeaders(data),
      body: JSON.stringify(data)
    })
    .then(r => {
      return r.json()
    })
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();