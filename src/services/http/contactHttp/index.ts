import axios from 'axios';

export const sendFormData = async (formData: any, headers:any) => {
  try {
    const response = await axios.post('http://localhost:8000/api/mailcontact', formData, {headers});
    console.log(response.data); 
  } catch (error) {
    console.error(error); 
   
  }
};

