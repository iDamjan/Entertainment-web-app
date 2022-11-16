import Card from "../Card/Card";
import classes from "./Content.module.scss";
// import { PropsType } from "./types";

export default function Content({data}:any) {
  return (
    <div className={classes.main}>
      <h1>{data[0].category}</h1>
      <div className={classes.container}>
        {data.map((x:any) => {
          return (
            <Card
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
