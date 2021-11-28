const cors = (req,res,next) => {
    res.setHeaders();

    next();
}