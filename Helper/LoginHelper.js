  import users from '../Data/UserData';

  export const userLogin = (username, password) => {
    const foundUser = users.find(user => user.kullaniciAdi === username && user.sifre === password);
    return foundUser;
  };