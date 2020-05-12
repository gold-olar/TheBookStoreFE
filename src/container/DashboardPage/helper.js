import jwt from 'jsonwebtoken';
export default (token) => {
    if (token){
        const userDetails = jwt.verify(token, process.env.REACT_APP_JWT_SECRET);
        console.log(userDetails);
        return userDetails
    }
    return {};
}