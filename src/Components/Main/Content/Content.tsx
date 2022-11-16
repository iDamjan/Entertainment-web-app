import Card from "../Card/Card";
import classes from "./Content.module.scss";
// import { PropsType } from "./types";

type Props = {
  data: any;
  searchInput: string;
};

export default function Content({ data, searchInput }: Props) {

  const filteredData = data.filter((x: any) =>
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
        {filteredData.map((x: any) => {
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
