const express = require('express');
const app = express();
const port = 3050;

const fs = require('fs');
const booksData = fs.readFileSync('Book.json');
let books = JSON.parse(booksData);

const User = fs.readFileSync('User.json','utf-8');
let users = JSON.parse(User);


const Post = fs.readFileSync('Post.json');
let post= JSON.parse(Post);

app.use(express.json());

////////////////////////////Login
app.post('/login', (req, res) => {
    const { Nickname, Password } = req.body;
    const user = users.find(user => user.Nickname === Nickname && user.Password === Password);
    if (!user) {
        return res.status(401).json({ error: 'Geçersiz kullanıcı adı veya şifre' });
    }

    return res.json({ message: 'Giriş başarılı', user: user });
});
//////////////////////////Register
app.post('/register', (req, res) => {
    const newUser = req.body;
    const newUserId = users.length + 1;

  // Yeni kullanıcının ID değerini ekleyerek veriyi güncelle
  const newUserWithId = {
    UserID: newUserId,
    ...newUser,
  };
    users.push(newUserWithId);

    fs.writeFileSync('User.json', JSON.stringify(users));
  
    res.status(200).json({ message: 'Kullanıcı başarıyla kaydedildi.', user: newUserWithId });
  });
//////////////Kitap Verileri
app.get('/books', (req, res) => {
    res.json(books);
});
///////////////Post Verileri
app.get('/post', (req, res) => {
    const {Followers} = req.query;
    const post = post.filter(post => post.Followers.includes(Followers))
    res.json(post);
});

//userdaki password verisini gizler
users = users.map(user => {
    const { Password, ...userWithoutPassword } = user;
    return userWithoutPassword;
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(port, () => {
    console.log(`API servisi ${port} numaralı portta çalışıyor.`);
});