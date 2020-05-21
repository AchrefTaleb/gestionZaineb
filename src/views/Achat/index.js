import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Store from "@material-ui/icons/Store";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomPasswordInput from "components/CustomInput/CustomPasswordInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Icon from "@material-ui/core/Icon";
import Warning from "@material-ui/core/SvgIcon/SvgIcon";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import CardIcon from "components/Card/CardIcon.js";


const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    }
};

const useStyles = makeStyles(styles);
const customGridStyle = {centred: {justifyContent: 'center'}};

export default function Index() {
    const classes = useStyles();
    return (
        <div>

            /* les composants de page */
            <h1> Achat</h1>

             <GridContainer>
                <GridItem xs={12} sm={6} md={6}>
                    <Card>
                        <CardHeader color="warning" stats icon>
                            <CardIcon color="warning">
                                <Icon>content_copy</Icon>
                            </CardIcon>
                            <p className={classes.cardCategory}>Used Space</p>
                            <h3 className={classes.cardTitle}>
                                49/50 <small>GB</small>
                            </h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <Danger>
                                    <Warning />
                                </Danger>
                                <a href="#pablo" onClick={e => e.preventDefault()}>
                                    Fournisseur
                                </a>
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                    <Card>
                        <CardHeader color="success" stats icon>
                            <CardIcon color="success">
                                <Store />
                            </CardIcon>
                            <p className={classes.cardCategory}>Revenue</p>
                            <h3 className={classes.cardTitle}>$34,245</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <DateRange />
                                Bon de commande fournisseur
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                    <Card>
                        <CardHeader color="danger" stats icon>
                            <CardIcon color="danger">
                                <Icon>info_outline</Icon>
                            </CardIcon>
                            <p className={classes.cardCategory}>Fixed Issues</p>
                            <h3 className={classes.cardTitle}>75</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <LocalOffer />
                                Facture fournisseur
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                    <Card>
                        <CardHeader color="info" stats icon>
                            <CardIcon color="info">
                                <Accessibility />
                            </CardIcon>
                            <p className={classes.cardCategory}>Followers</p>
                            <h3 className={classes.cardTitle}>+245</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <Update />
                                Réglement fournisseur
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}
