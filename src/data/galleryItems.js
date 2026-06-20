// Shared gallery data used by the Gallery page and the Home "Recent Impact" tiles.
// Each item is either a 'video' (YouTube embed URL) or an 'image' (static asset path).

const GALLERY_ITEMS = [
  {
    id: 'food-distribution',
    type: 'video',
    url: 'https://www.youtube.com/embed/ec-1NSL1GAk',
    thumbnail: 'https://i.ytimg.com/vi/ec-1NSL1GAk/hqdefault.jpg',
    title: 'Food Distribution',
    description: 'Distributing meals to daily workers and orphans.',
    category: 'Hunger Relief',
    date: '2024-08-12',
  },
  {
    id: 'community-support',
    type: 'video',
    url: 'https://www.youtube.com/embed/aquzw8uZi_w',
    thumbnail: 'https://i.ytimg.com/vi/aquzw8uZi_w/hqdefault.jpg',
    title: 'Community Support',
    description: 'Donated blankets on the new years eve.',
    category: 'Basic Needs',
    date: '2024-12-31',
  },
  {
    id: 'clothes-donation-video',
    type: 'video',
    url: 'https://www.youtube.com/embed/O2NcKd_GIZc',
    thumbnail: 'https://i.ytimg.com/vi/O2NcKd_GIZc/hqdefault.jpg',
    title: 'Clothes Donation Drive',
    description: 'A short video showcasing our impact in the community.',
    category: 'Basic Needs',
    date: '2024-10-05',
  },
  {
    id: 'clothes-donation-photo',
    type: 'image',
    url: '/children_cloths_donation.jpg',
    title: 'Clothes Donation Drive',
    description: 'Providing clothes to children in need.',
    category: 'Basic Needs',
    date: '2024-09-18',
  },
];

export default GALLERY_ITEMS;
