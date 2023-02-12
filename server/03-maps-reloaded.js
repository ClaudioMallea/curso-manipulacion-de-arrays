const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ]

// const rta = orders.map((item, index)=>{
//     item.index =index;
//     return item;

// });
// console.log(orders);
// console.log(rta)
//estamos modificando el array original, porque estamos referenciando al objeto

const rta2 = orders.map((item, index)=>{
    return {...item,index:index};

});
console.log(orders);
console.log(rta2)