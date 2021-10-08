export interface Game {
  name: string;
  id: string;
  image?: string;
  description: string;
  price: number;
  rating?: number | undefined;
  reviews?: Review[];
}

export interface Review {
  game: string | undefined;
  content: string;
  rating: number | undefined;
}

export interface CartItem {
  game: string;
  quantity: number;
}
