import jwt from 'jsonwebtoken'
export const authJWt = (req: any, res: any, next: any) => {
    console.log("::::::::: Verifying auth token :::::::::")

    const authHeader = req.headers.authorization;
    console.log("::::::auth :::", authHeader)
    if (authHeader) {
        const token = authHeader.split(' ')[1];


        jwt.verify(token, process.env.SECRET_KEY, (err: any, user: any) => {
            if (err) {
                console.log("token err.", err);
                res.send({ status: 403, message: "Invalid token..!" });
                return;
            }
            if (user) {
                console.log(user);
                req.body.role = user.role;
                req.body.userId = user.userId
            }
            next();
            return;
        });
    } else {
        res.send({ status: 401, message: " token expaired!" });
    }

}