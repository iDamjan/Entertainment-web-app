import Card from "../Card/Card";
import classes from "./Media.module.scss";
import { Media } from "../../../types/types";

type Props = {
  data: Media[];
  searchInput: string;
};

export default function Content({ data, searchInput }: Props) {
  
  const filteredData = data.filter((x) =>
    x.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className={classes.main}>
      {searchInput === "" ? (
        <h1>{data[0].category}</h1>
      ) : (
        <h1>
          Found {filteredData.length} {data[0].category} for{" "}
          {`"${searchInput}"`}
        </h1>
      )}

      <div className={classes.container}>
        {filteredData.map((x:any)=> {
          return (
            <Card
              key={x.title}
              title={x.title}
              thumbnail={x.thumbnail.regular?.medium}
              year={x.year}
              category={x.category}
              rating={x.rating}
            />
          );
        })}
      </div>
    </div>
  );
}
