import axios from "axios";


export const createEmployeeData = (data) =>{
    debugger;
      return axios.post(`http://localhost:3002/Employee/`, data).then(()=>{
                return true;
        }).catch((error) => {
            console.error('Error updating employee data:', error);
            throw error; // Rethrow the error to handle it in the component
        });;

  };

  export const getEmployeeData = () => {
    debugger;
    return axios.get(`http://localhost:3002/Employee`).then((response) => {
      // Handle the response here, or return it if you want to handle it elsewhere
      return response.data; // Returning the data from the response
    });
  };

  export const deleteEmployeeData = (id) => {
    debugger;
    return  axios.delete(`http://localhost:3002/Employee/${id}`).then((response) => {
      // Handle the response here, or return it if you want to handle it elsewhere
      return response.data; // Returning the data from the response
    });
  };

  export const updateEmployeeData = (data) => {
    debugger;
    return axios.put(`http://localhost:3002/Employee/${data.id}`, data).then(() => {
      // Handle the response here, or return it if you want to handle it elsewhere
      return true; // Returning the data from the response
    });
  };