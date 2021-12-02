const cors = (req,res,next) => {
    req.setHeader('Access-Control-Allow-Origin', '*');
    req.setHeader('Access-Control-Allow-Headers', '*');
    req.setHeader('Access-Control-Allow-Methods', '*');
    next();
}

module.exports = cors;