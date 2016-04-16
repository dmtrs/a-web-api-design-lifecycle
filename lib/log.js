module.exports = function(req) {
  console.log((new Date()).toISOString(), req.method, req.url);
};
