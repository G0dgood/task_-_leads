import createHttpService from '../../components/HttpService';
 

 
// Login user 
const login = async (value: any) => { 
   const HttpService = createHttpService();
  const { data } = await HttpService.post( '/api/v1/auth/signin-user', value ) 
 
  if (data) { 
    try {    
      localStorage.setItem('taskmaneger', JSON.stringify(data?.data));  
  } catch (e) {  console.log(`isLoggedIn in error ${e}`)  }  }
  return data
}
   
  // logout  
const logout = async () => { 
   const HttpService = createHttpService();
  const { data } = await HttpService.get( '/api/v1/auth/signout')  
   return data
};


  // View user by ID
const ViewUserByID = async (id: any) => {
  const HttpService = createHttpService(); 
  const { data } = await HttpService.get( `/api/v1/auth/users/user/${id}`)  
   return data
};


  // Forget Password
const forgetPassword = async (email: any) => { 
   const HttpService = createHttpService(); 
  const { data } = await HttpService.post( `/api/v1/auth/forgot-password`,{  "email": email })  
   return data
};

  // Forget Password
const resetPassword = async (email: any) => { 
 const HttpService = createHttpService(); 
  const { data } = await HttpService.post( `/api/v1/auth/reset-password`,{  "email": email })  
   return data
};

  // Update Profile
const updateProfile = async (value: any) => { 
  const HttpService = createHttpService(); 
  const { data } = await HttpService.patch( `/api/v1/auth/user/update-profile`, value)  
   return data
};

  // Current User
const currentUser = async () => {  
    const HttpService = createHttpService(); 
  const { data } = await HttpService.get( `/api/v1/auth/current-user`)  
   return data
};
  // Supervisor User
const supervisorUser = async (id:any) => {  
    const HttpService = createHttpService(); 
  const { data } = await HttpService.get( `/api/v1/auth/users/supervisor/${id}`)  
   return data
};

  



const authService = { 
  logout,
  login,  
  ViewUserByID,
  forgetPassword,
  resetPassword,
  updateProfile,
  currentUser,
  supervisorUser
}

export default authService
