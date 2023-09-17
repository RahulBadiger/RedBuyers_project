// authService.js
const API_URL = 'https://run.mocky.io/v3/0b140ce8-5cf9-414f-bbda-06965e6d728d';

export const login = async (username, password) => {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer 60o45uk4tw538uaq9vvnx7nm5iuif4j2',
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Invalid credentials');
    }
  } catch (error) {
    throw new Error('Login failed');
  }
};
