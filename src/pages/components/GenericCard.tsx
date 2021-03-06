import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Modal } from "@mui/material";
import { media, style } from "typestyle";

import cover from "../../images/cover.png";
import detailsHeaderImage from "../../../assets/detailsHeaderImage.svg";
import classnames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import {
  DeviceSmartphones,
  DeviceSmartphonesExtraSmall,
  DeviceTabletsPortrait,
} from "../../utils/devices";

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
      <CardActionArea style={{ paddingLeft: 0 }} onClick={() => onPress()}>
        <CardMedia
          component="img"
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

const cardStyle = style(
  {
    position: "relative",
    border: "none",
    width: "max-content",
    borderRadius: 1,
    $nest: {
      ".imageStyle": {
        width: "370px",
        height: "302px",
      },
      "&:hover .hover-text-style": {
        display: "block !important",
      },
      "&:hover .imageStyle": {
        opacity: 0.14,
      },
    },
  },
  media(DeviceTabletsPortrait, {
    paddingLeft: "0 !important",
    $nest: {
      ".imageStyle": {
        height: 300,
        width: 300,
      },
    },
  }),
  media(DeviceSmartphones, {
    paddingLeft: "0 !important",
    $nest: {
      ".imageStyle": {
        height: 300,
        width: 300,
      },
    },
  }),
  media(DeviceSmartphonesExtraSmall, {
    paddingLeft: "0 !important",
  })
);

const overlayContainerStyle = style({
  display: "none",
  position: "absolute",
  top: "40%",
  left: "auto",
  right: "auto",
  width: "100%",
  textAlign: "center",
  color: "#D99D55",
  fontSize: 48,
  fontFamily: "Cookie",
  overflowWrap: "break-word",
});

export default GenericCard;
