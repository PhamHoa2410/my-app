import * as React from "react";
import Items from "../Items";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import common from "../../../utils/common";
import Pagination from "../Pagination";
import { ItemsProps } from "../ListItem/interface";
import { UseNavigate } from "./hook/navigate";
type ListItemsProps = {
  list: any;
  page: number;
  setPage: any
};
const SearchResult: React.FC<ListItemsProps> = (props) => {
  const { list, page, setPage } = props;
  const { viewDetail } = UseNavigate()
  return (
    <div className="list-container">
      <div className="list-items">
        {list.map((item: ItemsProps, idx: number) => {
          return (
            <Items
              onClick={() => viewDetail(item)}
              key={idx}
              src={
                item.poster_path
                  ? `${common.img_300}/${item.poster_path}`
                  : common.unavailable
              }
              title={item.name || item.title}
              media={item.media_type === "tv" ? "TV" : "Movie"}
              release_date={item.first_air_date || item.release_date}
            />
          );
        })}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default SearchResult;
