import { createStyles, makeStyles } from "@material-ui/core/styles";


export const characterTableStyles = makeStyles(() =>
  createStyles({
    root: {
      minWidth: "375px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      border: "2px, solid, black"
    },
    gridList: {
      width: "80%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between"
    },
    GridListTileBar: {
      padding: 10
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)"
    }
  })
);