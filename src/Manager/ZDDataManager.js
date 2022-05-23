import axios from "axios";
import {GET_API} from "./ZDAPIUtils"

export const fetchFileNames = (callback) => {
  let parentId = localStorage.getItem("rootID")
            
  if(localStorage.getItem("parentID") !== "null"){
    parentId = localStorage.getItem("parentID")
  }
  const url = "/file-chunk/files"
  const params = {
    "parentId": parentId
}
  GET_API(url,params,(response)=>{
    callback(response)
  }, (error) => {
      console.log(error)
  })
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
      callback(response)
    })
    .catch((error) => {
      console.log("fail")
    })
}

export const uploadFileToServer = (uploadFile, tags, callback) => {
    const formData = new FormData();
    const fileName = uploadFile[0].name
    let parentId = localStorage.getItem("rootID")
    
    if(localStorage.getItem("parentID") !== "null"){
        console.log("if")
        parentId = localStorage.getItem("parentID")
    }

    formData.append('file', uploadFile[0]);
    formData.append('Tags', tags);
    formData.append('parentId', parentId);
    formData.append('fileName', fileName);
    console.log(formData)
    let url = "/file-chunk/"+fileName
    axios
    .post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
    .then((response) => {
        callback()
    })
    .catch((error) => {
      console.log("fail")
    });
}

export const deleteFile = (fileId, success, failure) => {
  let url = "/file-chunk/"+fileId
    axios
    .delete(url,{
      headers:{
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
    .then((response) => {
        success(response)
    })
    .catch((error) => {
      console.log("fail")
      failure(error)
    });
}

export const downloadFile = (fileId, success, failure) => {
    axios
    .get("/file-chunk/downloadFile",{
      params:{
        "uuid" : fileId
      },
      headers:{
        "Authorization": "Bearer " + localStorage.getItem("token")
      } 
    },{responseType: 'blob'})
    .then((response) => {
        success(response)
    })
    .catch((error) => {
      console.log("fail")
      failure(error)
    })
}

export const updateFile = (filename, tags, objectId, success, failure) => {
    let parentId = localStorage.getItem("rootID")
    const formData = new FormData();
              
    if(localStorage.getItem("parentID") !== "null"){
      parentId = localStorage.getItem("parentID")
    }
    const url = "/file-chunk/updateFile/"+objectId
    formData.append('Tags', tags);
    formData.append('parentId', parentId);
    formData.append('fileName', filename);
  
    axios
    .post(url, formData, {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
    .then((response) => {
      success(response)
    })
    .catch((error) => {
      console.log("fail")
      failure()
    });
}