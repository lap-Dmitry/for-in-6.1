export default function orderByProps(obj, order) {
  const orderArr = [];
  const heroOrderArr = [];
  for (const key in obj) {
    if (order.includes(key)) {
      orderArr.push({ key, value: obj[key] });
    } else {
      heroOrderArr.push({ key, value: obj[key] });
    }
  }
  orderArr.sort((a, b) => order.indexOf(a.key) - order.indexOf(b.key));
  heroOrderArr.sort((a, b) => ((a.key > b.key) ? 1 : -1));
  return [...orderArr, ...heroOrderArr];
}
