var jwt = require("jsonwebtoken");
const AuthUser = require('../../mockapi/auth-users-data');

module.exports.sigIn = async (req, res, next ) => {
    const { email, password } = req.body;
    const authUser = new AuthUser.AuthUser();

    const user = await authUser.getByEmail(email);
    if(!user){
        res.status(404);
        return res.json({message: "Not found account! Please try !", is_login : false});
    }
    // payload
    const payload = {
        check:true,
        sub:user.email
    };
    const screet = 'foobar568158558';

    if(user && user.password === password){
        let token = jwt.sign(payload, screet, {
            expiresIn: 1440
          });
    
        return res.json({ message: "suscess ", access_token: `Bearer ${token}`, email, is_login : true });
    }else{
        res.status(404);
        return res.json({message: "Not found account! Please try !", is_login : false});
    }

}


