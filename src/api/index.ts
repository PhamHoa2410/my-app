import axios from "axios";
import history from "../utils/history";
import common from "../utils/common";
import config from "../config";

export interface HTTPCLIENTCONFIG {
  path: string;
}

export const getAPI = ({ path }: HTTPCLIENTCONFIG): Promise<any> => {
  const url = `${config.resouce.API_URL}/${path}`;
  return new Promise((response, reject) => {
    axios({
      method: "get",
      url,
    })
      .then((res) => {
        return response(res.data);
      })
      .catch((error: any) => {
        const err = error as any;
        if (err) {
          common
            .openError({
              title: "Error",
              text: "There is some Error! Please try again",
              confirmButtonText: "Yes",
            })
            .then((res) => {
              localStorage.clear();
              history.push("/");
              window.location.reload();
            });
        } else {
          return reject({ message: "Invalid Call API" });
        }
      });
  });
};

export const postAPI = ({ path }: HTTPCLIENTCONFIG): Promise<any> => {
  const url = `${config.resouce.API_URL}?/api/${path}`;
  return new Promise((response, reject) => {
    axios({
      method: "post",
      url,
    })
      .then((res) => {
        return response(res?.data);
      })
      .catch((error: any) => {
        const err = error as any;
        if (err) {
          common
            .openError({
              title: "Error",
              text:
                err.status_message || "There is some Error! Please try again",
              confirmButtonText: "Yes",
            })
            .then(() => {
              localStorage.clear();
              history.push("/");

              window.location.reload();
            });
          return;
        }

        return reject({ message: "There is something wrong" });
      });
  });
};
