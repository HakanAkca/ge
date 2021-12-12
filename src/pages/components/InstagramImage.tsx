import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { style } from "typestyle";
import classnames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import cover from "../../images/cover.png";
import detailsHeaderImage from "../../../assets/detailsHeaderImage.svg";

export interface GenericCardProps {
  cover?: any;
  images?: any;
}

const InstagramImage = ({ cover, images }: GenericCardProps) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      itemWidth: 0,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      itemWidth: 0,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      itemWidth: 0,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      itemWidth: 0,
    },
  };

  const carouselRef = React.useRef(null);
  console.log(carouselRef);
  carouselRef &&
    carouselRef.current &&
    carouselRef.current.state &&
    carouselRef.current.state.itemWidth == 0;

  return (
    <Grid container>
      {/* {Array.from(Array(5)).map((_, index) => (
        <Grid item>
          <Card>
            <CardActionArea href="https://google.com">
              <CardMedia
                component="img"
                height="150"
                width="220px !important"
                alt="green iguana"
                src={detailsHeaderImage}
                className="imageStyle"
                style={{ width: 195, height: 192 }}
              />
            </CardActionArea>
          </Card>
        </Grid>
      ))}
      <Card>
        <CardActionArea href="https://google.com">
          <CardMedia
            component="img"
            height="150"
            width="220px !important"
            alt="green iguana"
            src={detailsHeaderImage}
            className="imageStyle"
            style={{ width: 195, height: 192 }}
          />
        </CardActionArea>
      </Card> */}
      <Grid item xs={10}></Grid>
    </Grid>
  );
};

const itemClassStyle = style({ width: 0 });

export default InstagramImage;
