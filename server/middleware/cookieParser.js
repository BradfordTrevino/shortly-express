const parseCookies = (req, res, next) => {
  if (req.headers.cookie) {
    let cookieArr = req.headers.cookie.split('; ');
    cookieArr.forEach(cookie => {
      var kvCookie = cookie.split('=');
      req.cookies[kvCookie[0]] = kvCookie[1];
    });
  } else {
    req.cookies = {};
  }
  next();
};

module.exports = parseCookies;