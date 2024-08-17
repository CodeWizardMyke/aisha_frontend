
function verifyAuthUser(){
  const user = localStorage.getItem('employee');
  const token = localStorage.getItem('token');

  if( !user || !token){
    return false;
  }else{
    return true;
  }
}

export default verifyAuthUser;