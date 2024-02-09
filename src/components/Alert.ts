import Swal from "sweetalert2";

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "#6F47EB",
    cancelButton: "btn btn-danger",
  },
  buttonsStyling: false,
});

 

export const fireAlert2 = (title: string, message: string, icon: any, url: any, props: any) => { 
  
  swalWithBootstrapButtons.fire({
    title: title  ,
    html: message,
    icon:icon,
    showCancelButton: false, 
    cancelButtonText: "OK",
     confirmButtonText: "Okay"
  }).then(function () { 
    // Redirect the user
    	localStorage.removeItem('taskmaneger'); 
      window.location.replace(url);     
    }); 
};
 
