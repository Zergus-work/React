let data = [
  {
    name: "Merida",
    status: "Avaliable",
    type: "cross",
    color: "black",
    price: 500,
    whellSize: 26,
    _id: 1524689759651,
    description:
      "sdfsd fsd  sdf sdfsdfsdfsdf f sdsdfs df sdf sdf sd f sdf s df sf  sdf ",
  },
  {
    name: "Trek",
    status: "Booked",
    type: "mountaing",
    color: "white",
    price: 1500,
    whellSize: 28,
    _id: 1524689759652,
    description:
      "sdfsd fsd  sdf sdfsdfsdfsdf f sdsdfs df sdf sdf sd f sdf s df sf  sdf ",
  },
  {
    name: "Trek",
    status: "Booked",
    type: "mountaing",
    color: "white",
    price: 1500,
    whellSize: 28,
    _id: 1524689659653,
    description:
      "sdfsd fsd  sdf sdfsdfsdfsdf f sdsdfs df sdf sdf sd f sdf s df sf  sdf ",
  },
];

export function getData() {
  return data;
}

export function deleteItem(e) {
  data = data.filter((x) => {
    console.log(x._id);
    return parseInt(x._id) !== parseInt(e.target.id);
  });

  console.log(data);
}

export function addData(x) {
  data.unshift(x);
  console.log(data);
}
