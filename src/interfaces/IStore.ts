export interface IStore {
    message: string;
    data: Data
  }

  export interface Data {
    _id: string;
    name_company: string;
    time_delivery: string;
    banner: string;
    logo: string;
    categories: Array<Array<ICategories>>
  }

  export interface ICategories {
    name_category: string;
    itens: Array<Itens>
  }

  export interface Itens {
    id: string;
    title: string;
    description: string;
    tag_new: number;
    img: string;
    size: string;
    price: number;
    discount_price: number;
    tag_discount: number;
  }