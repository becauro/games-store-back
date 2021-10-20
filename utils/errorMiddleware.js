module.exports = function errorMiddleware(err, _req, res, _next) {
    if (err.code) {
        return res.status(err.status).json({
               err: {
                   code: err.code,
                   message: err.message,
               },
           }); 
       }
};