import Image from '../images/events/event-beach.jpg';
import artistImg_01 from '../images/latitude/Artist_01.jpg'
import artistImg_02 from '../images/latitude/Artist_02.jpg'
import itemImg_01 from '../images/shop-items/shop-item1.jpg'
import itemImg_02 from '../images/shop-items/shop-item2.jpg'
import itemImg_03 from '../images/shop-items/shop-item3.jpg'
export const events = [
  {
    id: 1,
    variant: 'weekly',
    date: 'Apr 30-04',
    place: 'Caligraphy Class, A1',
    name: 'Let there be light',
    img: Image,
  },
  {
    id: 2,
    variant: 'monthly',
    date: 'date 00-00',
    place: 'Caligraphy Class, Latitude',
    name: 'Fashion Awards',
    img: Image,
  },
  {
    id: 3,
    variant: 'monthly',
    date: 'date 00-00',
    place: 'Caligraphy Class, Latitude',
    name: 'Artist Collective',
    img: Image,
  },
  {
    id: 4,
    variant: 'past',
    date: 'date 00-00',
    place: 'Place',
    name: 'Name',
    img: Image,
  },
  {
    id: 5,
    variant: 'past',
    date: 'date 00-00',
    place: 'Place',
    name: 'Name',
    img: Image,
  },
  {
    id: 6,
    variant: 'past',
    date: 'date 00-00',
    place: 'Place',
    name: 'Name',
    img: Image,
  },
  {
    id: 7,
    variant: 'past',
    date: 'date 00-00',
    place: 'Place',
    name: 'Name',
    img: Image,
  },
  {
    id: 8,
    variant: 'past',
    date: 'date 00-00',
    place: 'Place',
    name: 'Name',
    img: Image,
  },
  {
    id: 9,
    variant: 'past',
    date: 'date 00-00',
    place: 'Place',
    name: 'Name',
    img: Image,
  },
];

export const artists = [
  {
    id: 1,
    artistName: 'Gohar Sargsyan',
    position:'Artist',
    country:'Armenia',
    artistImg: artistImg_02,
  },
  {
    id: 2,
    artistName: 'Nareh Petrossian',
    position:'Artist',
    country:'Armenia',
    artistImg: artistImg_01,
  },
  {
    id: 3,
    artistName: 'Armen Hakobjanyan',
    position:'Artist',
    country:'Armenia',
    artistImg: '',
  },
  {
    id: 4,
    artistName: 'Mary Badalian',
    position:'Artist',
    country:'Armenia',
    artistImg: '',
  },
  {
    id: 5,
    artistName: 'Elsa Eghiazarian (Ilse)',
    position:'Artist',
    country:'Armenia',
    artistImg: '',
  },
];

export const shopCard =[
  {
    id: 1,
    creatorName: 'Gohar Sargsyan',
    itemName:'Untitled',
    year:'2009',
    price:'3000 $',
    itemImg: itemImg_01,
  },
  {
    id: 2,
    creatorName: 'Item 2222',
    itemName:'Untitled',
    year:'2009',
    price:'3000 $',
    itemImg: itemImg_02,
  },
  {
    id: 3,
    creatorName: 'Item 444',
    itemName:'Untitled',
    year:'2009',
    price:'3000 $',
    itemImg: itemImg_03,
  },
]

export const contactCard = [
  {
    id: 1,
    title: 'The Beach',
    time: {
      timeText1:'Mon-Sun 17:00-01:00',
      timeText2:'',
      timeText3:'',
    },
    address: 'Ashtarak Highway 7 Yerevan, Armenia',
    floor: 'Art Factory 5th Floor',
    tel: 'Tel: +374 77 862 300',
    email: 'Thebeach@gmail.com',
    social: {
      instagram: 'www.instagram.com',
      facebook: 'www.facebook.com',
      youtube: '',
      tripAdvisor: 'www.tripadvisor.com'
    }
  },
  {
    id: 2,
    title: 'Latitude',
    time: {
      timeText1:'Mon-Wed Close',
      timeText2:'Thu-Sun 14:00-19:00',
      timeText3:'',

    },
    address: 'Ashtarak Highway 7 Yerevan, Armenia',
    floor: 'Art Factory 1th Floor',
    tel: 'Tel: +374 44 204 434',
    email: 'latitude@yerevanbiennial.org',
    social: {
      instagram: 'www.instagram.com',
      facebook: 'www.facebook.com',
      youtube: 'www.youtube.com',
      tripAdvisor: ''
    }
  },
  {
    id: 3,
    title: 'A1',
    time: {
      timeText1:'Mon Close',
      timeText2:'Tue-Sun 11:00-20:00',
      timeText3:'',
    },
    address: 'Abovyan street 1 Yerevan, Armenia',
    floor: 'Second Floor',
    tel: 'Tel: +374 44 204 434',
    email: 'A1@yerevanbiennial.org',
    social: {
      instagram: 'www.instagram.com',
      facebook: 'www.facebook.com',
      youtube: '',
      tripAdvisor: ''
    }
  },
  
]
