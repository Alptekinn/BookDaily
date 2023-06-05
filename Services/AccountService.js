import axios from 'axios';

const apiUrl = 'http://192.168.1.25:3050';

export const userlogin = async (Nickname, password) => {
  try {
    const requestData = {
      Nickname: Nickname,
      password: password
    };

    const response = await axios.post(`${apiUrl}/login`, requestData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const registers = async (User) => {
  try {
    const response = await axios.post(`${apiUrl}/register`, User);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error(error)
    throw error;
  }
};
  /*  import users from '../Data/UserData';
export const userLogin = (username, password) => {
const foundUser = users.find(user => user.kullaniciAdi === username && user.sifre === password);
return foundUser;
};*/