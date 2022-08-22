
export interface IApiRes<T>{
    msg:string,
  code: string;
    result:T
}
export interface ICategoryItem {
  id: string;
  name: string;
  picture: string;
  children: Child[];
  goods: Good[];
  open?:boolean;
}

interface Good {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  discount?: any;
  orderNum?: any;
}

interface Child {
  id: string;
  name: string;
  picture: string;
  children?: any;
  goods?: any;
}