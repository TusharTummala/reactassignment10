

const users = [
    { id: 1, username: 'user1', password: '$2a$10$Zb.Sr1KwQh/zCyqPHW50s.DCWByQl5.R3KsFCW8bGLUSkzFV4TmVa' }, 
    { id: 2, username: 'user2', password: '$2a$10$n9yWlCqVJlFphjRlCvSv1.XKX89B8QGRCaWXG52emFlN5o9apE6Iy' }, 
  ];
  
  export const loginUser = async (username, password) => {
    const user = users.find(user => user.username === username);
    if (!user) return null;

    if (password !== user.password) return null;
    return user;
  };
  
  export const registerUser = async (username, password) => {

    const newUser = { id: users.length + 1, username, password };
    users.push(newUser);
    return newUser;
  };
  
