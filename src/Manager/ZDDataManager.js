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