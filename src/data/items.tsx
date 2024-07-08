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
      name: 'Item 1',
      description: 'Description for item it will 1',
      price: 100,
      image: 'src/assets/2.jpg',
    },
    {
      id: 2,
      name: 'Item 2',
      description: 'Description for item 2',
      price: 200,
      image: 'src/assets/3.jpg',
    },

    {
      id: 3,
      name: 'Item 3',
      description: 'Description for item 4',
      price: 400,
      image: 'src/assets/5.jpg',
    },

  ];
  