import {Food} from './app/shared/models/Food';
import { Tag } from './app/shared/models/Tag';

export const sample_foods: Food[] = [
  {
    id:'1',
    name: 'Taj mahal',
    cookTime: '10-20',
    price: 10,
    favorite: false,
    origins: ['India','Delhi'],
    stars: 4.5,
    imageUrl: 'assets/tajmahal.jpg',
    tags : ['Historic']
  },
  {
    id:'2',
    name: 'India Gate',
    price: 20,
    cookTime: '20-30',
    favorite: true,
    origins: ['India','Delhi'],
    stars: 4.7,
    imageUrl: 'assets/indiagate.jpg',
    tags: ['Historic'],
  },
  {
    id:'3',
    name: 'Amaravati',
    price: 5,
    cookTime: '10-15',
    favorite: false,
    origins: ['India','Andhra Pradesh'],
    stars: 3.5,
    imageUrl: 'assets/amaravatiap.jpg',
    tags: ['Historic'],
  },
  {
    id:'4',
    name: 'Kollam',
    price: 2,
    cookTime: '15-20',
    favorite: true,
    origins: ['India', 'Kerela'],
    stars: 3.3,
    imageUrl: 'assets/kollamkerela.jpg',
    tags: ['Historic'],
  },
  {
    id:'5',
    name: 'Kulu Manali',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['india', 'Shimla'],
    stars: 3.0,
    imageUrl: 'assets/kulumanali.jpg',
    tags: ['Hillstations'],
  },
  {
    id:'6',
    name: 'Ooty',
    price: 9,
    cookTime: '40-50',
    favorite: false,
    origins: ['India','Tamil Nadu'],
    stars: 4.0,
    imageUrl: 'assets/ootychennai.jpg',
    tags: ['Hillstations'],
  },
  {
    id:'7',
    name: 'Dalhousie',
    price: 12,
    cookTime: '20-30',
    favorite: false,
    origins: ['India','Himachal Pradesh'],
    stars: 4.0,
    imageUrl: 'assets/dalhousiehp.jpg',
    tags: ['Hillstations'],
  },
  {
    id:'8',
    name: 'Shillong',
    price: 9,
    cookTime: '45-50',
    favorite: false,
    origins: ['india','Meghalaya'],
    stars: 4.0,
    imageUrl: 'assets/shillongmeghalaya.jpg',
    tags: ['Hillstations'],
  },
  {
    id:'9',
    name: 'Velanikini Church',
    price: 9,
    cookTime: '45-50',
    favorite: false,
    origins: ['India','TamilNadu'],
    stars: 4.0,
    imageUrl: 'assets/velanikinikerela.jpg',
    tags: ['Religious-places'],
  },
  {
    id:'10',
    name: 'Thirumala',
    price: 9,
    cookTime: '45-50',
    favorite: false,
    origins: ['India','Andhra Pradesh'],
    stars: 4.0,
    imageUrl: 'assets/tirumala.jpg',
    tags: ['Religious-places'],
  },
  {
    id:'11',
    name: 'Shillong',
    price: 9,
    cookTime: '45-50',
    favorite: false,
    origins: ['India','Delhi'],
    stars: 4.0,
    imageUrl: 'assets/Jamamasjid.jpg',
    tags: ['Religious-places'],
  },
  {
    id:'12',
    name: 'Harmandir Sahib (Golden Temple)',
    price: 9,
    cookTime: '45-50',
    favorite: false,
    origins: ['India','Punjab'],
    stars: 4.0,
    imageUrl: 'assets/goldentemple.jpg',
    tags: ['Religious-places'],
  }
]

export const sample_tags:Tag[] = [
  { name: 'All', count: 8 },
  { name: 'Hillstations', count: 4 },
  { name: 'Historic', count: 4 },
  { name: 'Religious-places', count: 4 },
 
]
