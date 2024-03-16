import { useNavigate } from "react-router-dom";

export const UseNavigate = () => {
  const navigate = useNavigate();
  const viewDetail = (init: any) => {
    navigate(`/movieDatails`, {
      state: {
        data: init,
      },
    });
  };
  return {
    viewDetail,
  };
};
