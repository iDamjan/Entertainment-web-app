import React from "react";
import data from "../../../../Data/data.json";
import Card from "../../Card/Card";
import classes from "./Recommended.module.scss";

export default function Recommended() {
  const recommendedContent = data.filter((x) => x.isTrending === false);

  return (
    <div className={classes.container}>
      {recommendedContent.map((trend) => {
        return (
          <Card
            key={trend.title}
            title={trend.title}
            thumbnail={trend.thumbnail.regular?.medium}
            year={trend.year}
            category={trend.category}
            rating={trend.rating}
          />
        );
      })}
    </div>
  );
}
