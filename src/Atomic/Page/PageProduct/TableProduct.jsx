import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import AlertDialog from "../PageCategory/AlertDialog";
import ViewProduct from "./ViewProductDialog";
import {  makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  CardContent,
  Grid,
  Card,
  Box,
  IconButton,
} from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useState } from "react";
import Search from "../../Search/Search";
import FormEditProduct from "./EditProduct";
import Sort from "../../Sort/Sort";
import { Visibility } from "@material-ui/icons";
import EditIcon from "@material-ui/icons/Edit";

import _ from "lodash";

const useStyles = makeStyles({
  table: {
    minWidth: "650px",
    overflow: "auto",
  },
});
const DataProduct = [
  {
    id: "SP1",
    nodot: 1,
    name: "Cà Phê Hòa Tan Đậm Vị Việt Túi 40x16G",
    image:
      "https://images.unsplash.com/photo-1500631195312-e3a9a5819f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "Bắt đầu ngày mới với tách cà phê sữa “Đậm vị Việt” mạnh mẽ sẽ giúp bạn luôn tỉnh táo và hứng khởi cho ngày làm việc thật hiệu quả.",
    size: "50",
    money: "98.000Đ",
    status: "còn hàng",
  },
  {
    id: "SP2",
    nodot: 2,
    name: "Cà Phê Sữa Đá Pack 6 Lon",
    image:
      "https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "Với thiết kế lon cao trẻ trung, hiện đại và tiện lợi, Cà phê sữa đá lon thơm ngon đậm vị của The Coffee House sẽ đồng hành cùng nhịp sống sôi nổi của tuổi trẻ và giúp bạn có được một ngày làm việc đầy hứng khởi.",
    size: 50,
    money: "200000Đ",
    status: "còn hàng",
  },
  {
    id: "SP3",
    nodot: 3,
    name: "Trà Sen Túi Lọc Tearoma 20x2G",
    image:
      "https://images.unsplash.com/photo-1606767341197-2de041e9ad9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "Trà túi lọc Tearoma hương sen tinh tế, thanh mát, trên nền trà xanh đậm đà khó quên. Trà túi lọc Tearoma tiện lợi để sử dụng tại văn phòng, tại nhà, đi du lịch,... nhưng vẫn đảm bảo được chất lượng về hương trà tinh tế, vị trà đậm đà.",
    size: 50,
    money: "200000Đ",
    status: "còn hàng",
  },
  {
    id: "SP4",
    nodot: 4,
    name: "Chocolate Đá Xay",
    image:
      "https://images.unsplash.com/photo-1572590016064-3e6ae9c04947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "Sữa và kem tươi béo ngọt được “cá tính hoá” bởi vị chocolate/sô-cô-la đăng đắng. Dành cho các tín đồ hảo ngọt. Lựa chọn hàng đầu nếu bạn đang cần chút năng lượng tinh thần.",
    size: 50,
    money: "200000Đ",
    status: "còn hàng",
  },
  {
    id: "SP5",
    nodot: 5,
    name: "Chocolate Đá",
    image:
      "https://images.unsplash.com/photo-1575596510825-f748919a2bf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTd8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "Bột chocolate nguyên chất hoà cùng sữa tươi béo ngậy. Vị ngọt tự nhiên, không gắt cổ, để lại một chút đắng nhẹ, cay cay trên đầu lưỡi.",
    size: 50,
    money: "200000Đ",
    status: "còn hàng",
  },
  {
    id: "SP6",
    nodot: 6,
    name: "Hi-Tea Yuzu",
    image:
      "https://images.unsplash.com/photo-1589080366527-92a1126ec8f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHxkcmlua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    desc: "Không chỉ nổi bật với sắc đỏ đặc trưng từ trà hoa Hibiscus, Hi-Tea Yuzu còn gây ấn tượng với topping Yuzu (quýt Nhật) lạ miệng, kết hợp cùng trân châu trắng dai giòn sần sật, nhai vui vui.",
    size: 50,
    money: "200000Đ",
    status: "còn hàng",
  },
  {
    id: "SP7",
    nodot: 7,
    name: "Hi-Tea Vải",
    image:
      "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA0fHxkcmlua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    desc: "Chút ngọt ngào của Vải, mix cùng vị chua thanh tao từ trà hoa Hibiscus, mang đến cho bạn thức uống đúng chuẩn vừa ngon, vừa healthy.",
    size: 50,
    money: "200000Đ",
    status: "còn hàng",
  },
  {
    id: "SP8",
    nodot: 8,
    name: "Gà Xé Lá Chanh",
    image:
      "https://images.unsplash.com/photo-1563312416-c604403c02e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE1fHxkcmlua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    desc: "Thịt gà được xé tơi, mang hương vị mặn, ngọt, cay cay quyện nhau vừa chuẩn, thêm chút thơm thơm thơm từ lá chanh sấy khô giòn giòn xua tan ngay cơn buồn miệng.",
    size: 50,
    money: "200000Đ",
    status: "còn hàng",
  },
  {
    id: "SP9",
    nodot: 9,
    name: "Mousse Red Velvet",
    image:
      "https://images.unsplash.com/photo-1581343945411-50dca0f4b13e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA4fHxkcmlua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    desc: "Bánh nhiều lớp được phủ lớp kem bên trên bằng Cream cheese.",
    size: 50,
    money: "200000Đ",
    status: "còn hàng",
  },
  {
    id: "SP10",
    nodot: 10,
    name: "Bánh Mì VN Thịt Nguội",
    image:
      "https://images.unsplash.com/photo-1603471431201-a526d16e4569?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA1fHxkcmlua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    desc: "Gói gọn trong ổ bánh mì Việt Nam là từng lớp chả, từng lớp jambon hòa quyện cùng bơ và pate thơm lừng, thêm dưa rau cho bữa sáng đầy năng lượng. ",
    size: 50,
    money: "200000Đ",
    status: "còn hàng",
  },

  {
    id: "SP11",
    nodot: 11,
    name: "Cà Phê",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "Việt Nam tự hào sở hữu một di sản văn hóa cà phê giàu có, và 'Phin' chính là linh hồn, là nét văn hóa thưởng thức cà phê đã ăn sâu vào tiềm thức biết bao người Việt. ",
    size: 50,
    money: "200000Đ",
    status: "còn hàng",
  },
  {
    id: "SP12",
    nodot: 12,
    name: " Freeze",
    image:
      "https://media.istockphoto.com/photos/coffee-with-ice-cream-and-chocolate-picture-id659271566?b=1&k=20&m=659271566&s=170667a&w=0&h=XMNqD-i9-AXhf3bRaXOX3Q8d_GOpghhlP0BJxIDUD1k=",
    desc: "Nếu bạn là người yêu thích những gì mới mẻ và sành điệu để khơi nguồn cảm hứng. Hãy thưởng thức ngay các món nước đá xay độc đáo mang hương vị tự nhiên tại Highlands Coffee để đánh thức mọi giác quan của bạn, giúp bạn luôn căng tràn sức sống.",
    size: 50,
    money: "200000Đ",
    status: "hết hàng",
  },
  {
    id: "SP13",
    nodot: 13,
    name: "Trà",
    image:
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    desc: "Hương vị tự nhiên, thơm ngon của Trà Việt với phong cách hiện đại tại Highlands Coffee sẽ giúp bạn gợi mở vị giác của bản thân và tận hưởng một cảm giác thật khoan khoái, tươi mới.",

    size: 50,
    money: "200000Đ",
    status: "hết hàng",
  },
  {
    id: "SP14",
    nodot: 14,
    name: "Bánh Ngọt",
    image:
      "https://images.unsplash.com/photo-1488477304112-4944851de03d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    desc: "Còn gì tuyệt vời hơn khi kết hợp thưởng thức đồ uống của bạn cùng với những chiếc bánh ngọt ngon tinh tế được làm thủ công ngay tại bếp bánh của Highlands Coffee. Những chiếc bánh của chúng tôi mang hương vị đặc trưng của ẩm thực Việt và còn là sự Tận Tâm, gửi gắm mà chúng tôi dành cho Quý khách hàng.",
    size: 50,
    money: "200000Đ",
    status: "hết hàng",
  },
];
export default function TableProduct() {
  const classes = useStyles();
  const [DataTable, setDataTable] = useState(DataProduct);
  const [showDialog, setShowDialog] = useState(false);
  const [dataDialog, setDataDialog] = useState({});
  const [editDialog, setEditDialog] = useState(true);
  const [search, setSearch] = useState("");
  const [valueSelect, setValueSelect] = useState("");
  const [viewDialog, setViewDialog] = useState(false);

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

  const removeChangeHandler = (id) => {
    setDataTable(DataTable.filter((item) => item.id !== id));
  };

  const handleUpdate = (id) => {
    const idRow = DataTable.findIndex((item) => item.id === id);
    setDataDialog(DataTable[idRow]);
    setShowDialog(true);
    setEditDialog(false);
  };

  const handleCreate = () => {
    setDataDialog({});
    setShowDialog(true);
    setEditDialog(false);
  };

  const updateDataHandler = (item) => {
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

  const selectChangeHandler = (value) => {
    setValueSelect(value);
  };
  //Xem
  const ViewHandler = (id) => {
    const idRow = DataTable.findIndex((item) => item.id === id);
    setDataDialog(DataTable[idRow]);
    setViewDialog(true);
  };
  return (
    <>
      {viewDialog && (
        <ViewProduct
          onView={ViewHandler}
          title={"Danh mục"}
          dataDialog={dataDialog}
          setViewDialog={setViewDialog}
        />
      )}
      {showDialog && (
        <FormEditProduct
          setShowDialog={setShowDialog}
          row={dataDialog}
          editDialog={editDialog}
          setEditDialog={setEditDialog}
          updateData={updateDataHandler}
        ></FormEditProduct>
      )}
      <div
        style={{
          marginTop: "30px",
          color: "blue",
          backgoundColor: "white",
          fontSize: "xx-large",
          marginLeft: "80px",
        }}
      >
        Danh Sách Sản Phẩm
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
          marginLeft: "80px",
          width: "90%",
          marginBottom: "32px",
        }}
        display="flex"
        justifyContent="flex-end"
      >
        {" "}
        <Button variant="contained" color="primary" onClick={handleCreate}>
          Thêm sản phẩm
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
                style={{ fontWeight: "bold", width: "100px" }}
              >
                Sản phẩm
              </TableCell>
              <TableCell
                align="center"
                style={{ fontWeight: "bold", width: "100px" }}
              >
                Hình ảnh
              </TableCell>
              <TableCell
                align="left "
                style={{ fontWeight: "bold", width: "300px" }}
              >
                Miêu tả
              </TableCell>
              <TableCell
                align="right "
                style={{
                  fontWeight: "bold",
                  width: "70px",
                  // textAlign: "center",
                }}
              >
                Thành tiền
              </TableCell>
              <TableCell
                align="left "
                style={{ fontWeight: "bold", width: "70px" }}
              >
                Tình trạng
              </TableCell>

              <TableCell
                align="center"
                style={{ fontWeight: "bold", width: "200px" }}
              >
                Thao tác
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.length === 0 && (
              <p style={{ marginLeft: "20px", width: "200px" }}>
                Không còn sản phẩm nào
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
                    style={{
                      height: "100px",
                      width: "170px",
                      padding: "5px",
                    }}
                    alt="#"
                    src={row.image}
                    variant="square"
                  />
                </TableCell>
                <TableCell align="left">{row.desc}</TableCell>
                <TableCell style={{ textAlign: "center" }} align="right">
                  {row.money}
                </TableCell>
                <TableCell style={{ textAlign: "center" }} align="left">
                  {row.status}
                </TableCell>
                <TableCell align="center">
                  <Grid
                    container
                    spacing={[20, 20]}
                    justifyContent="center"
                    alignItems="baseline"
                  >
                    <Grid item xs=" auto ">
                      <IconButton
                        onClick={() => ViewHandler(row.id)}
                        variant="contained"
                        color="primary"
                        style={{ margin: 5 }}
                      >
                        <Visibility />
                      </IconButton>
                    </Grid>

                    <Grid xs="auto">
                      <AlertDialog
                        id={row.id}
                        onRemove={removeChangeHandler}
                        title={"Bạn có chắc muốn xóa sản phẩm này ?"}
                      />
                      {/* <IconButton
                          onClick={() => handleDelete(row.id)}
                          variant="contained"
                          style={{ margin: 5 }}
                          color="secondary"
                        >
                          <DeleteIcon />
                        </IconButton> */}
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
