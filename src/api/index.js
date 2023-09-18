import axios from 'axios';

const url = 'http://localhost:5000/users';

export const fetchUsers = () => axios.get(url);

export const createUser = (newUser) => {
  axios.post(url, newUser)
      .then((response) => {
        console.log('Пользователь успешно создан:', response.data);
      }).catch((error) => {
    console.error('Произошла ошибка при создании пользователя:', error);
  });
};