import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Modal } from "@mui/material";

import cover from "../../images/cover.png";
import detailsHeaderImage from "../../../assets/detailsHeaderImage.svg";
import { style } from "typestyle";
import classnames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

export interface GenericCardProps {
  cover?: any;
  images?: any;
  data?: any;
  handleOpen?: any;
  setSelectedData?: any;
}

const GenericCard = ({
  data,
  handleOpen,
  setSelectedData,
}: GenericCardProps) => {
  const onPress = () => {
    handleOpen();
    setSelectedData(data);
  };
  return (
    <Card className={cardStyle}>
      <CardActionArea onClick={() => onPress()}>
        <CardMedia
          component="img"
          height="307px"
          alt="green iguana"
          src={data && data.coverUrl}
          className="imageStyle"
        />
        <div className={classnames(overlayContainerStyle, "hover-text-style")}>
          {data && data.title}
        </div>
      </CardActionArea>
    </Card>
  );
};

const cardStyle = style({
  position: "relative",
  border: "none",
  width: "max-content",
  borderRadius: 1,
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
