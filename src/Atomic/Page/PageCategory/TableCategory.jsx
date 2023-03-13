import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Visibility } from "@material-ui/icons";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from '@mui/icons-material/Delete';


import { categoryData } from "../api";
import SectionTemplate from "../../SectionTemplate";
import Typography from "@mui/material/Typography";

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
} from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function BasicTable() {
  const [DataTable, setDataTable] = useState([]);
  console.log("data table", DataTable);
  useEffect(() => {
    setDataTable(categoryData);
  }, []);
  const sortOptions = [
    "Sắp xếp thứ tự tăng dần",
    "Sắp xếp thứ tự giảm dần",
    "Sắp xếp thứ tự ngày",
    "Sắp xếp thứ tự tháng",
  ];
  const rows = [
    {
      title: "STT",
      width: 80,
      align: "center",
    },
    {
      title: "Danh mục",
      width: 100,
    },
    {
      title: "Hình ảnh",
      width: 100,
    },
    {
      title: "Miêu tả",
      width: 400,
    },
    {
      title: "Thao tác",
      width: 200,
      align: "center",
    },
  ];
  return (
    <SectionTemplate>
      <Card>
        <CardContent>
          <SectionTemplate spacing={3}>
            <Typography
              component="div"
              variant="h6"
              sx={{ paddingTop: "32px", fontweight: "bolder" }}
            >
              Danh Sách Danh Mục
            </Typography>
            <Typography component="div">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      width: 500,
                      maxWidth: "100%",
                    }}
                  >
                    <TextField fullWidth label="Tìm kiếm" id="fullWidth" />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={sortOptions}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Sắp xếp" />
                    )}
                  />
                </Grid>
              </Grid>
            </Typography>
          </SectionTemplate>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <SectionTemplate>
            <Box textAlign="end">
              <Button variant="contained" color="secondary">
                Thêm danh mục
              </Button>
            </Box>

            <TableContainer component={Paper}>
              <Table
                stickyHeader
                aria-label="sticky table"
                sx={{ minWidth: 650 }}
              >
                <TableHead>
                  <TableRow>
                    {rows.map((cell) => (
                      <TableCell
                        key={cell.title}
                        width={cell.width}
                        align={cell.align}
                      >
                        <Typography variant="h6">{cell.title}</Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {DataTable.map((row) => (
                    <TableRow key={row.nodot}>
                      <TableCell component="th" scope="row" align="center">
                        {row.nodot}
                      </TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>
                        <Avatar
                          style={{
                            height: "25%",
                            width: "25%",
                          }}
                          alt="#"
                          src={row.image}
                          variant="square"
                        />
                      </TableCell>
                      <TableCell>{row.desc}</TableCell>
                      <TableCell>
                        <Grid container spacing={2} justifyContent="center" alignItems='center'>
                          <Grid item xs="auto">
                            <IconButton variant="outlined" color="primary">
                              <Visibility />
                            </IconButton>
                          </Grid>
                          <Grid item xs="auto">
                            <IconButton
                              variant="contained"
                              style={{ margin: 5 }}
                              color="secondary"
                            >
                              <DeleteIcon />
                            </IconButton>
                          </Grid>

                          <Grid item xs="auto">
                            <IconButton
                              variant="contained"
                              style={{ margin: 5 }}
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
          </SectionTemplate>
        </CardContent>
      </Card>
    </SectionTemplate>
  );
}
