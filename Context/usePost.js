import axios from 'axios';
import { useContext, useEffect } from 'react';
import { UserContext } from './UserContext';

async function getPosts(userID) {
  try {
    const response = await axios.get(`http://192.168.1.25:3050/api/posts/${userID}`);

    console.log(response.data)
    console.log("userid", userID)
    return response.data;

  } catch (error) {
    throw error;
  }
}

const usePosts = () => {
  const { userData, setUserData } = useContext(UserContext);
  const userID = userData ? userData.userID : '1';

  useEffect(() => {
    getPosts(userID)
      .then(posts => {
        setUserData(posts);
      })
      .catch(error => {
        console.error('Hata:', error);
      });
  }, [userData, setUserData]);
  return userData;
};

export default usePosts;