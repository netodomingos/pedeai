export interface IStore {
    message: string;
    data: {
      _id: string;
      name_company: string;
      time_delivery: string;
      banner: string;
      logo: string;
      categories: {
        name_category: string;
        itens: {
          id: string;
          title: string;
          description: string;
          tag_new: number;
          img: string;
          size: string;
          price: number;
          discount_price: number;
          tag_discount: number;
        }[];
      }[];
    };
  }