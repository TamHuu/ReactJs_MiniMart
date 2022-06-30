import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ViewDialog from "./ViewDialog";
import { Visibility } from "@material-ui/icons";
import EditIcon from "@material-ui/icons/Edit";
import FormDialog from "./EditDialog";

import AlertDialog from "./AlertDialog";

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
} from "@material-ui/core";
import Search from "../../Search/Search";
import Sort from "../../Sort/Sort";
import _ from "lodash";
const useStyles = makeStyles({
  table: {
    minWidth: "650px",
    overflow: "auto",
  },
});

export const rows = [
  {
    id: "SP1",
    nodot: 1,
    name: "Cà Phê",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "Việt Nam tự hào sở hữu một di sản văn hóa cà phê giàu có, và 'Phin' chính là linh hồn, là nét văn hóa thưởng thức cà phê đã ăn sâu vào tiềm thức biết bao người Việt. Cà phê rang xay được chiết xuất chậm rãi từng giọt một thông qua dụng cụ lọc bằng kim loại có tên là 'Phin'.",
  },
  {
    id: "SP2",
    nodot: 2,
    name: " Freeze",
    image:
      "https://media.istockphoto.com/photos/coffee-with-ice-cream-and-chocolate-picture-id659271566?b=1&k=20&m=659271566&s=170667a&w=0&h=XMNqD-i9-AXhf3bRaXOX3Q8d_GOpghhlP0BJxIDUD1k=",
    desc: "Nếu bạn là người yêu thích những gì mới mẻ và sành điệu để khơi nguồn cảm hứng. Hãy thưởng thức ngay các món nước đá xay độc đáo mang hương vị tự nhiên tại Highlands Coffee để đánh thức mọi giác quan của bạn, giúp bạn luôn căng tràn sức sống.",
  },
  {
    id: "SP3",
    nodot: 3,
    name: "Trà",
    image:
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    desc: "Hương vị tự nhiên, thơm ngon của Trà Việt với phong cách hiện đại tại Highlands Coffee sẽ giúp bạn gợi mở vị giác của bản thân và tận hưởng một cảm giác thật khoan khoái, tươi mới.",
    money: "40.000Đ",
  },
  {
    id: "SP4",
    nodot: 4,
    name: "Bánh Ngọt",
    image:
      "https://images.unsplash.com/photo-1488477304112-4944851de03d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    desc: "Còn gì tuyệt vời hơn khi kết hợp thưởng thức đồ uống của bạn cùng với những chiếc bánh ngọt ngon tinh tế được làm thủ công ngay tại bếp bánh của Highlands Coffee. Những chiếc bánh của chúng tôi mang hương vị đặc trưng của ẩm thực Việt và còn là sự Tận Tâm, gửi gắm mà chúng tôi dành cho Quý khách hàng.",
  },
  {
    id: "SP5",
    nodot: 5,
    name: "Cà phê đóng gói",
    image:
      "https://media.istockphoto.com/photos/coffee-bag-with-custom-label-organic-whole-beans-picture-id962658860?b=1&k=20&m=962658860&s=170667a&w=0&h=CU9l7nQgFgo4v7_Y__Ev8hFXkNKG7HymFUyvQCb_4Pg=",
    desc: "Bạn muốn trổ tài pha chế những ly cà phê đậm đà, thơm ngon ngay tại nhà; hay chỉ đơn giản là đang tìm một món quà không quá cầu kì, nhưng đậm chất nghĩa tình dành cho những người bạn quan tâm.",
  },
];
export default function BasicTable({ clickHandler }) {
  const classes = useStyles();

  const [DataTable, setDataTable] = useState(rows);
  const [showDialog, setShowDialog] = useState(false);
  const [dataDialog, setDataDialog] = useState({});
  const [editDialog, setEditDialog] = useState(true);
  const [viewDialog, setViewDialog] = useState(false);
  const [search, setSearch] = useState("");
  const [valueSelect, setValueSelect] = useState("");

  //Tìm kiếm
  let filtered = DataTable;

  if (search) {
    filtered = [...filtered].filter((item) =>
      item.name.toLowerCase().startsWith(search.toLowerCase())
    );
  }

  if (valueSelect === "nameIncrease")
    filtered = _.orderBy(filtered, ["name"], ["asc"]);
  else if (valueSelect === "nameDecrease")
    filtered = _.orderBy(filtered, ["name"], ["desc"]);
  else if (valueSelect === "noDotIncrease")
    filtered = _.orderBy(filtered, ["nodot"], ["asc"]);
  else if (valueSelect === "noDotDecrease")
    filtered = _.orderBy(filtered, ["nodot"], ["desc"]);

  const searchChangeHandler = (value) => {
    setSearch(value);
  };
  //Sắp xếp
  const selectChangeHandler = (value) => {
    setValueSelect(value);
  };
  //Xóa
  const removeChangeHandler = (id) => {
    setDataTable(DataTable.filter((item) => item.id !== id));
    // setRemove(id);
  };
  //Xem
  const ViewHandler = (id) => {
    const idRow = DataTable.findIndex((item) => item.id === id);
    setDataDialog(DataTable[idRow]);
    setViewDialog(true);
  };
  //Sửa
  const handleUpdate = (id) => {
    const idRow = DataTable.findIndex((item) => item.id === id); //
    setDataDialog(DataTable[idRow]);
    setShowDialog(true);
    setEditDialog(false);
  };
  const updateDataHandler = (item) => {
    console.log(item);

    const tempDataTable = [...DataTable];
    const indexEditItem = tempDataTable.findIndex((row) => row.id === item.id);

    if (indexEditItem !== -1) {
      tempDataTable[indexEditItem] = { ...item };
      setDataTable([...tempDataTable]);
      setShowDialog(false);
    } else {
      const length = tempDataTable.length - 1;
      tempDataTable.push({
        ...item,
        id: tempDataTable[length].id + 1,
        nodot: tempDataTable[length].nodot + 1,
      });

      setDataTable(tempDataTable);
      setShowDialog(false);
    }
  };
  //Thêm
  const handleCreate = () => {
    setDataDialog({});
    setShowDialog(true);
    setEditDialog(false);
  };

  return (
    <>
      {viewDialog && (
        <ViewDialog
          onView={ViewHandler}
          title={"Danh mục"}
          dataDialog={dataDialog}
          setViewDialog={setViewDialog}
        />
      )}
      {showDialog && (
        <FormDialog
          setShowDialog={setShowDialog}
          row={dataDialog}
          editDialog={editDialog}
          setEditDialog={setEditDialog}
          updateData={updateDataHandler}
        ></FormDialog>
      )}
      <div
        style={{
          marginTop: "30px",
          color: "blue ",
          backgoundColor: "white",
          fontSize: "xx-large",
          marginLeft: "80px",
        }}
      >
        Danh Sách Danh Mục
      </div>
      <Card style={{ marginLeft: "80px", width: "90%" }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={2}>
              <Sort
                valueSelect={valueSelect}
                onChangeSelect={selectChangeHandler}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Search search={search} onSearch={searchChangeHandler} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <br />
      <Box
        style={{
          overflowX: "auto",
          marginLeft: "70px",
          width: "90%",
          marginBottom: "20px",
        }}
        display="flex"
        justifyContent="flex-end"
        p={1}
      >
        {" "}
        <Button variant="contained" color="primary" onClick={handleCreate}>
          Thêm danh mục
        </Button>
      </Box>

      <TableContainer
        component={Paper}
        style={{
          // maxHeight: "414px",
          overflowX: "auto",
          width: "90%",
          marginLeft: "80px",
          maxHeight: "500px",
        }}
      >
        <Table
          stickyHeader
          aria-label="sticky table"
          size="small"
          padding="checkbox"
          className={classes.table}
        >
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                style={{ height: "50px", fontWeight: "bold", maxWidth: "10px" }}
              >
                STT
              </TableCell>
              <TableCell
                align="left"
                style={{ fontWeight: "bold", width: "40px" }}
              >
                Danh mục
              </TableCell>
              <TableCell
                align="center"
                style={{ fontWeight: "bold", width: "70px" }}
              >
                Hình ảnh
              </TableCell>
              <TableCell
                align="center "
                style={{ fontWeight: "bold", width: "300px" }}
              >
                Miêu tả
              </TableCell>

              <TableCell
                align="center"
                style={{ fontWeight: "bold", width: "100px" }}
              >
                Thao tác
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.length === 0 && (
              <p style={{ marginLeft: "20px", width: "300px" }}>
                Không còn danh mục nào
              </p>
            )}

            {filtered.map((row) => (
              <TableRow key={row.nodot}>
                <TableCell align="center" component="th" scope="row">
                  {row.nodot}
                </TableCell>

                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="center" style={{ textAlign: "center" }}>
                  <Avatar
                    style={{ height: "100px", width: "revert", padding: "5px" }}
                    alt="#"
                    src={row.image}
                    variant="square"
                  />
                </TableCell>
                <TableCell align="left">{row.desc}</TableCell>

                <TableCell align="center">
                  <Grid
                    container
                    spacing={[20, 20]}
                    justifyContent="center"
                    alignItems="baseline"
                  >
                    <Grid item xs="auto">
                      <IconButton
                        variant="outlined"
                        color="primary"
                        onClick={() => ViewHandler(row.id)}
                      >
                        <Visibility />
                      </IconButton>
                    </Grid>
                    <Grid item xs="auto">
                      <AlertDialog
                        id={row.id}
                        onRemove={removeChangeHandler}
                        title={"Bạn có chắc muốn xóa danh mục này ?"}
                      />
                    </Grid>

                    <Grid xs="auto">
                      <IconButton
                        variant="contained"
                        style={{ margin: 5 }}
                        onClick={() => handleUpdate(row.id)}
                      >
                        <EditIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
