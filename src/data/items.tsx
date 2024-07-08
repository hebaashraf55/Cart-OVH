export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const items: Item[] = [
  {
    id: 1,
    name: "Item 1",
    description: "Description for item it will 1",
    price: 100,
    image:
      " https://img.freepik.com/free-psd/helmet-mock-up_1310-157.jpg?w=826&t=st=1720218999~exp=1720219599~hmac=c7739e47adc0ed865576f817a32cfb72abdb3f21354e5bf45477770467fad0bb",
  },
  {
    id: 2,
    name: "Item 2",
    description: "Description for item 2",
    price: 200,
    image:
      "https://img.freepik.com/free-photo/blender-juice-machine_1203-7838.jpg?t=st=1720218844~exp=1720222444~hmac=98d1420df1ddcc775b5f9da8201f3a9b8528acfe102ccedbab52394ec5ce4918&w=826",
  },

  {
    id: 3,
    name: "Item 3",
    description: "Description for item 4",
    price: 400,
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
  },
];
