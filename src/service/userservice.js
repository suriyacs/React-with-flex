const url = 'https://reqres.in/api/';

  const getUserList = async () => {
    return fetch(`${url}users?page=2`).then(response => response.json().then(data => data));
  } 

module.exports = {
  getUserList
}