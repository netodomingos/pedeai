export interface IStore {
    message: string;
    data: Data
  }

  type Data = {
    _id: string;
    name_company: string;
    time_delivery: string;
    banner: string;
    logo: string;
    categories: Array<Categories>
  }

  type Categories = {
    name_category: string;
    itens: Array<Itens>
  }

  type Itens = {
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