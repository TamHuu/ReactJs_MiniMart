import React from "react";
import { withStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
// import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { Avatar } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon style={{ color: "red" }} />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

// const DialogActions = withStyles((theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(1),
//   },
// }))(MuiDialogActions);

export default function ViewProduct(props) {
  const handleClose = () => {
    props.setViewDialog(false);
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={true}
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          open={true}
        >
          Sản phẩm
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <Avatar
              alt="Cindy Baker"
              variant="square"
              src={props.dataDialog.image}
              style={{
                width: "250px",
                height: "250px",
                marginBottom: "16px",
                marginLeft: "150px",
              }}
            />
            {/* )} */}
          </Typography>
          <Typography gutterBottom>
            <b> Tên sản phẩm: </b> {props.dataDialog.name}
          </Typography>

          <Typography gutterBottom>
            {" "}
            <b> Miêu tả: </b> {props.dataDialog.desc}
          </Typography>
          <Typography gutterBottom>
            {" "}
            <b> Thành tiền: </b> {props.dataDialog.money}
          </Typography>
          <Typography gutterBottom>
            {" "}
            <b> Tình trạng: </b> {props.dataDialog.status}
          </Typography>
        </DialogContent>
        {/* <DialogActions>
          <Button color="secondary" autoFocus onClick={handleClose}>
            Thoát
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}
