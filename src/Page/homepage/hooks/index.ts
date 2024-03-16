import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAPI } from "../../../api";
import { Access_key } from "../../config";
import common from "../../../utils/common";
import config from "../../../config";

export const UseSearchMovie = () => {
  const [page, setPage] = React.useState<number>(1);

  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);
  const [isShow, setIsShow] = React.useState<boolean>(false);
  const searchMovie = async () => {
    setIsShow(true);
    try {
      if (!searchText) {
        common.openError({
          title: "Error",
          text: "The Search Bar cannot be blank",
          confirmButtonText: "Yes",
        });
      } else {
        const res = await getAPI({
          path: `${config.resouce.SEARCHMULTI}?api_key=${Access_key}&language=en-US&query=${searchText}&page=${page}&include_adult=false`,
        });
        if (res) {
          setContent(res.results);
        }
      }
    } catch (error) {
      const err = error as any;
      common.openError({
        title: "Error",
        text: err.status_message,
        confirmButtonText: "Yes",
      });
    } finally {
      setIsShow(false);
      window.scrollTo(0, 0);
    }
  };

  const Search = () => {
    searchMovie();
  };

  const Trigger = (e: any) => {
    setSearchText(e.target.value);
  };
  return {
    searchMovie,
    page,
    setPage,
    isShow,
    content,
    Search,
    Trigger,
    searchText,
  };
};
