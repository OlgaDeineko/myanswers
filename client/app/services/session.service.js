function SessionService() {
  "ngInject";

  var user;

  return{
    setUser : function(aUser){
        user = aUser;
    },
    isLoggedIn : function(){
        return(user)? user : false;
    }
  }
}


export default SessionService;
