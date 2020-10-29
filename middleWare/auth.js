const Index = require("./../public/200.html");

module.exports = (req, res, next) => {
  let { path, method } = req;
  if (
    (path === "/" && method === "POST") ||
    (/^\/[A-Za-z0-9_-]{7}$/.test(path) && method === "GET")
  )
    next();
  else res.send(Index);
};
