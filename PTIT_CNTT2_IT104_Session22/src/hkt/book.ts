export interface Book { 
  id: number; 
  title: string; 
  author: string; 
  genre: string; 
  publishedYear: number; 
  quantity: number; 
  available: number; 
  isbn: string; 
  status: 'available' | 'out_of_stock' | 'discontinued'; 
}
