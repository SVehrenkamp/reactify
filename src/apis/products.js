
module.exports = {
  getProducts: () => {
    const items = [
      {title: "Cool Swimsuit", tcin: 12345, price: "99.95", qty: 1, image: 'http://target.scene7.com/is/image/Target/21533465' },
      {title: "Neat Bikini", tcin: 67890, price: "9.95", qty: 1, image: 'http://target.scene7.com/is/image/Target/21530747' },
      {title: "Sweet Bikini Top", tcin: 10123, price: "29.95", qty: 1, image: 'http://target.scene7.com/is/image/Target/21533474' },
      {title: "Nice Bikini Bottoms", tcin: 10456, price: "3.95", qty: 1, image: 'http://target.scene7.com/is/image/Target/18852352' }
    ];
    return (items);
  }
};
