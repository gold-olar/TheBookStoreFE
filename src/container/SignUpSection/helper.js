export default (data) => {
    const {password, confirmPassword} = data;
    if (password.length < 8) {
        return {status: false, message: "Password should contain at least 8 characters"}
    }
    if (password !== confirmPassword){
        return {status: false, message: "Passwords do not match"}
    }
    return {status:true};
}