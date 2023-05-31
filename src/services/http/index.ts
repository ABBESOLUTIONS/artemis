import axios from 'axios';

export const sendFormData = async (formData: any) => {
  try {
    const response = await axios.post('http://localhost/', formData);
    console.log(response.data); 
  } catch (error) {
    console.error(error); 
   
  }
};

