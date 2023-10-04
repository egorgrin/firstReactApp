import axios from 'axios';

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
