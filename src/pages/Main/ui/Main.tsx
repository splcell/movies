import { Filters } from "../../../components/Filters";
import { MoviesList } from "../../../components/MoviesList";
import { Pagination } from "../../../components/Pagination";
import { Search } from "../../../components/Search";
import { SelectComponent } from "../../../components/Select";

export default function Main() {
  

  return (
    <div className="content-wrapper">
      <Filters>
        <Search />
        <SelectComponent />
      </Filters>
      <MoviesList />
      {/* <Pagination /> */}
    </div>
  );
}
