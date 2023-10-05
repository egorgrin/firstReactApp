import axios from 'axios';

export const auth = (username, password) => axios.put(`http://localhost:5000/auth?username=${username}&password=${password}`);

export const fetchUsers = () => axios.get('http://localhost:5000/users');

export const fetchFriends = () => axios.get('http://localhost:5000/friends');

/*
export const createUser = (newUser) => {
  axios.post(url, newUser)
      .then((response) => {
        console.log('Пользователь успешно создан:', response.data);
      }).catch((error) => {
    console.error('Произошла ошибка при создании пользователя:', error);
  });
};*/
