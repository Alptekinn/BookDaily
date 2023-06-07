import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const UserContext = createContext();

const apiUrl = 'http://192.168.1.25:3050';

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const userlogin = async (nickname, password) => {
    try {
      const requestData = {
        Nickname: nickname,
        Password: password
      };

      const response = await axios.request({
        url: `${apiUrl}/login`,
        method: 'post',
        data: requestData
      });

      const { data, error,user } = response.data;
      if (error) {
        setUserData(null);
        Alert.Alert("Kullanıcı adı şifre yanlış")
      }
      setUserData(user);
      return user;
    } catch (error) {
     
    }
  };

  return (
    <UserContext.Provider value={{ userData,setUserData, userlogin }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };