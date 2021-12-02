 const parseId = (req,res,next) => {
    let { id } = req.params;
    req.params.id = Number(id);
    next();
}

module.exports = parseId;