import axios from "axios";

export const fetchFileNames = (callback) => {
  axios
    .get("/file-chunk")
    .then((response) => {
      callback(Object.values(response.data))
    })
    .catch((error) => {
      console.log("fail")
    });
}

export const createUser = (object, callback) => {
  console.log("create user", object)
  const url = "/api/auth/signup/"
  axios
    .post(url, object,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      })
    .then((response) => {
      console.log(response)
      callback(response)
    })
    .catch((error) => {
      console.log("fail")
    })
}

export const loginUser = (object, callback) => {
  console.log("login user", object)
  const url = "/api/auth/signin/"
  axios
    .post(url, object,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      })
    .then((response) => {
      console.log(response)
      callback(response)
    })
    .catch((error) => {
      console.log("fail")
    })
}