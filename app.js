function checkLogin() {
  if (localStorage.getItem('logged_in') === 'true') {
    if (window.location.pathname.includes('index.html')) {
      window.location.href = 'main.html';
    }
  }
}

function login(user, pass) {
  if (user && pass) {
    localStorage.setItem('logged_in', 'true');
    localStorage.setItem('user', user);
    window.location.href = 'main.html';
    return true;
  }
  return false;
}

function logout() {
  localStorage.removeItem('logged_in');
  localStorage.removeItem('user');
  window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', checkLogin);
