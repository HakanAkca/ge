import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import cover from "../../images/cover.png";
import detailsHeaderImage from "../../../assets/detailsHeaderImage.svg";
import { style } from "typestyle";
import classnames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

export interface GenericCardProps {
  cover?: any;
  images?: any;
}

const GenericCard = ({ cover, images }: GenericCardProps) => {
  return (
    <Card className={cardStyle}>
      <CardActionArea href="https://google.com">
        <CardMedia
          component="img"
          height="308px"
          alt="green iguana"
          src={detailsHeaderImage}
          className="imageStyle"
        />
        <div className={classnames(overlayContainerStyle, "hover-text-style")}>
          this text should overlay the image
        </div>
      </CardActionArea>
    </Card>
  );
};

const cardStyle = style({
  position: "relative",
  border: "none",
  $nest: {
    "&:hover .hover-text-style": {
      display: "block !important",
    },
    "&:hover .imageStyle": {
      opacity: 0.44,
    },
  },
});

const overlayContainerStyle = style({
  display: "none",
  position: "absolute",
  top: "50%",
  left: "auto",
  right: "auto",
  width: "100%",
  textAlign: "center",
});

export default GenericCard;
