module.exports = (req, res, next) => {
    if(req.user.admin)
    {
        next();
    }
    else
    {
        res.status(403).send();
    }
}


// module.exports = {
//     isAdmin: (req, res, next) => {
//         if(req.user.admin){
//             next();
//         }else{
//             res.status(403).send();
//         }
//     }
// }