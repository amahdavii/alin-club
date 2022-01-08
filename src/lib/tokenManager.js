
export const setToken = (token) => {
  localStorage.setItem("token", token);
};
export const getToken = () => {
    return localStorage.getItem("token");
};
export const removeToken = () => {
  localStorage.removeItem("token");
};


export const setUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };
  export const getUser = () => {
    var value=localStorage.getItem("user");
    return JSON.parse(value)
    // return null
  };
  export const removeUser = () => {
    localStorage.removeItem("user");
  };


export const setUUID = (uuid) => {
  //console.log('setItem',uuid)
  localStorage.setItem("uuid", uuid);
};
export const getUUID = () => {
  return localStorage.getItem("uuid");
  // return Application.Token;
};
export const removeUUID = () => {
  localStorage.removeItem("uuid");
};

