let signUp= function(userName){
 let userName=["alice","bob","david","albert"]
 for(let i=0; i<=userName.length-1;i++){
    if(userName[i]==userName){
        return "User Already Regsistered, Please Login"
    }
    return "Signup Sucessfull, Please Login"
 }
}
console.log(signUp("mob"))