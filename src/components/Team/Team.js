import React from 'react';
import './Team.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const Team = (props) => {
    const { team } = props;
    const { strTeam, strTeamBadge, strSport, idTeam } = team;
    const classes = useStyles();

    return (
        <Card className={classes.root} id="card">
            <CardActionArea>
                <CardMedia id="img"
                    className={classes.media}
                    image={strTeamBadge}
                    title={strTeam}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <strong>{strTeam}</strong>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" id="p">
                        Sports Type: {strSport}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link to={"/team/" + idTeam} style={{ textDecoration: "none", width: "100%" }}>
                    <Button id="exploreBtn" variant="contained" color="primary">Explore &#8594;</Button>
                </Link>
            </CardActions>
        </Card>
    );
};

export default Team;