import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAPI } from "../../../api";
import { Access_key } from "../../config";
import common from "../../../utils/common";
import config from "../../../config";
import { CastProps, Genre, MovieDetailProps } from "../interface";

export const UseGetDetailMovies = (id: number) => {
  const [getDetail, setGetDetail] = useState<MovieDetailProps>();
  const [getCredit, setGetCredit] = useState<CastProps>();
  const [isShow, setIsShow] = React.useState<boolean>(false);
  const getMovie = async () => {
    setIsShow(true);
    try {
      const res = await getAPI({
        path: `${config.resouce.MOVIEDETAIL}/${id}?api_key=${Access_key}`,
      });
      if (res) {
        setGetDetail(res);
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

  const getMovieCredis = async () => {
    setIsShow(true);
    try {
      const res = await getAPI({
        path: `${config.resouce.MOVIEDETAIL}/${id}/credits?api_key=${Access_key}&language=en-US`,
      });
      if (res) {
        setGetCredit(res);
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
    }
  };
  React.useEffect(() => {
    getMovie();
    getMovieCredis();
  }, []);
  return {
    getDetail,
    isShow,
    getCredit,
  };
};
