let data = JSON.parse(localStorage.getItem("data")) || [
  {
    name: "Merida",
    status: "Avaliable",
    type: "cross",
    color: "black",
    price: "500",
    whellSize: "26",
    _id: "1524689759651",
    description:
      "sdfsd fsd  sdf sdfsdfsdfsdf f sdsdfs df sdf sdf sd f sdf s df sf  sdf ",
  },
  {
    name: "Trek",
    status: "Busy",
    type: "dirt",
    color: "white",
    price: "1500",
    whellSize: "28",
    _id: "1524689759652",
    description:
      "sdfsd fsd  sdf sdfsdfsdfsdf f sdsdfs df sdf sdf sd f sdf s df sf  sdf ",
  },
  {
    name: "Trek",
    status: "Unavaliable",
    type: "mountain",
    color: "white",
    price: "1500",
    whellSize: "28",
    _id: "1524689659653",
    description:
      "sdfsd fsd  sdf sdfsdfsdfsdf f sdsdfs df sdf sdf sd f sdf s df sf  sdf ",
  },
];

export function getData() {
  return data;
}

export function deleteItem(e) {
  data = data.filter((x) => {
    return parseFloat(x._id) !== parseFloat(e.target.id);
  });
  localStorage.setItem("data", JSON.stringify(data));
}

export function addData(x) {
  x["status"] = "Avaliable";

  data.unshift(x);
  localStorage.setItem("data", JSON.stringify(data));
}

export function changeStatus(id, status) {
  data = data.map((el) => {
    if (parseFloat(el._id) === parseFloat(id)) el.status = status;
    return el;
  });
  localStorage.setItem("data", JSON.stringify(data));
}
