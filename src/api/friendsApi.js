import instance from './axiosConfig';


export function getFriends(id, token, page = 1) {
  try {
    return instance.get('/friends', {
      params: {
        id: id,
        page: page
      },
      headers: {"Authorization" : `Bearer ${token}`}
    });
  } catch (error) {
    console.log(error);
  }
}

export function addFriendRequest(token, id2) {
  try {
    return instance.post('/friends', 
      {
        id2: id2
      }, 
      {
        headers: {"Authorization" : `Bearer ${token}`}
      });
  } catch (error) {
    console.log(error);
  }
}

export function deleteFriendRequest(token, id2) {
  try {
    return instance.delete('/friends', {
      params: {
        id2: id2
      },
      headers: {"Authorization" : `Bearer ${token}`}
    });
  } catch (error) {
    console.log(error);
  }
}

