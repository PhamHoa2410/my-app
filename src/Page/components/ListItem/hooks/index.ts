import React, { useState } from "react";
import { Access_key } from "../../../config";
import common from "../../../../utils/common";
import { getAPI } from "../../../../api";
import { useNavigate } from "react-router-dom";
import config from "../../../../config";

export const UseGetListRending = (type: string) => {
  const apiKey =
    type === "nowPlaying"
      ? config.resouce.MOSTPLAYING
      : config.resouce.TOPRATES;

  const [nowPlaying, setNowPlaying] = React.useState([]);
  const [page, setPage] = React.useState<number>(1);
  const [isShow, setIsShow] = React.useState<boolean>(false);
  const navigate = useNavigate();
  const getListMovie = async () => {
    setIsShow(true);
    try {
      const res = await getAPI({
        path: `${apiKey}?api_key=${Access_key}&page=${page}`,
      });
      if (res) {
        setNowPlaying(res.results);
      }
    } catch (error) {
      const err = error as any;
      common.openError({
        title: "Error",
        text: err.status_message || "There is some Error! Please try again",
        confirmButtonText: "Yes",
      });
    } finally {
      setIsShow(false);
      window.scrollTo(0, 0);
    }
  };

  React.useEffect(() => {
    getListMovie();
  }, []);

  const viewDetail = (init: any) => {
    navigate(`/movieDatails`, {
      state: {
        data: init,
      },
    });
  };
  return {
    getListMovie,
    nowPlaying,
    page,
    setPage,
    isShow,
    viewDetail,
  };
};
