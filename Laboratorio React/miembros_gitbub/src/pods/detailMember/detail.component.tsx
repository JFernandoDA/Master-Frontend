import React from "react";
import { Link } from "react-router-dom";
import { Member } from "../../common";
import { memberStyles } from "../../layout/index";
import Card from "@material-ui/core/Card";
import { CentredLayaout } from "../../layout/index";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

interface Props {
  id: string;
  companyName: String;
  member: Member;
}

export const DetailPage: React.FC<Props> = ({ id, companyName, member }) => {
  const classes = memberStyles();
  return (
    <>
      <CentredLayaout>
        <h2> Detalles del miembro de {companyName} </h2>
        <Card className={classes.root}>
          <CardMedia
            component="img"
            alt={member.login}
            image={member.avatar_url}
            title={member.login}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {member.login}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              User Id: {member.id}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              Login: {member.login}
            </Typography>
          </CardContent>
          <CentredLayaout>
            <Link to="/list">Back to list page</Link>
          </CentredLayaout>
          <br />
        </Card>
      </CentredLayaout>
    </>
  );
};
