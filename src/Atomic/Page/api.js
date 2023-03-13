 const categoryData = [
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
    {
      id: "SP5",
      nodot: 6,
      name: "Cà phê đóng gói",
      image:
        "https://media.istockphoto.com/photos/coffee-bag-with-custom-label-organic-whole-beans-picture-id962658860?b=1&k=20&m=962658860&s=170667a&w=0&h=CU9l7nQgFgo4v7_Y__Ev8hFXkNKG7HymFUyvQCb_4Pg=",
      desc: "Bạn muốn trổ tài pha chế những ly cà phê đậm đà, thơm ngon ngay tại nhà; hay chỉ đơn giản là đang tìm một món quà không quá cầu kì, nhưng đậm chất nghĩa tình dành cho những người bạn quan tâm.",
    },
    {
      id: "SP5",
      nodot: 7,
      name: "Cà phê đóng gói",
      image:
        "https://media.istockphoto.com/photos/coffee-bag-with-custom-label-organic-whole-beans-picture-id962658860?b=1&k=20&m=962658860&s=170667a&w=0&h=CU9l7nQgFgo4v7_Y__Ev8hFXkNKG7HymFUyvQCb_4Pg=",
      desc: "Bạn muốn trổ tài pha chế những ly cà phê đậm đà, thơm ngon ngay tại nhà; hay chỉ đơn giản là đang tìm một món quà không quá cầu kì, nhưng đậm chất nghĩa tình dành cho những người bạn quan tâm.",
    },
    {
      id: "SP5",
      nodot: 8,
      name: "Cà phê đóng gói",
      image:
        "https://media.istockphoto.com/photos/coffee-bag-with-custom-label-organic-whole-beans-picture-id962658860?b=1&k=20&m=962658860&s=170667a&w=0&h=CU9l7nQgFgo4v7_Y__Ev8hFXkNKG7HymFUyvQCb_4Pg=",
      desc: "Bạn muốn trổ tài pha chế những ly cà phê đậm đà, thơm ngon ngay tại nhà; hay chỉ đơn giản là đang tìm một món quà không quá cầu kì, nhưng đậm chất nghĩa tình dành cho những người bạn quan tâm.",
    },
    {
      id: "SP5",
      nodot: 9,
      name: "Cà phê đóng gói",
      image:
        "https://media.istockphoto.com/photos/coffee-bag-with-custom-label-organic-whole-beans-picture-id962658860?b=1&k=20&m=962658860&s=170667a&w=0&h=CU9l7nQgFgo4v7_Y__Ev8hFXkNKG7HymFUyvQCb_4Pg=",
      desc: "Bạn muốn trổ tài pha chế những ly cà phê đậm đà, thơm ngon ngay tại nhà; hay chỉ đơn giản là đang tìm một món quà không quá cầu kì, nhưng đậm chất nghĩa tình dành cho những người bạn quan tâm.",
    },
  ];
  export  {categoryData}