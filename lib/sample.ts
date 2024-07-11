const image = [
  'https://images.unsplash.com/photo-1493612276216-ee3925520721',
  'https://images.unsplash.com/photo-1518895949257-7621c3c786d7',
  'https://plus.unsplash.com/premium_photo-1664392248318-4e1d9361726e',
  'https://images.unsplash.com/photo-1496449903678-68ddcb189a24'
];

const posts: Post[] = [
  {
    id: '1',
    title: 'Căn 2 ngủ',
    attachments: [image[0], image[1], image[2]],
    createdAt: new Date(),
    creator: 'Bảo',
    votes: ['Bảo', 'Minh Hiếu'],
    description: 'không có description',
    note: 'Không có ghi chú',
  },
  {
    id: '2',
    title: 'Căn 3 ngủ',
    attachments: [image[1], image[2], image[3]],
    createdAt: new Date(),
    creator: 'Bảo',
    votes: ['Bảo'],
    description: 'không có description',
    note: 'Không có ghi chú',
  },
  {
    id: '3',
    title: 'Căn 4 ngủ',
    attachments: [image[2], image[0], image[1], image[0], image[1], image[2]],
    createdAt: new Date(),
    creator: 'Bảo',
    votes: [ 'Linh Trang'],
    description: 'không có description',
    note: 'Không có ghi chú',
  }
]


export const SampleRoomData: RoomData = {
  roomId: 'hba02',
  roomName: 'Đi sóc sơn',
  isArchived: false,
  isExpired: false,
  isPrivate: true,
  password: 'hehe',
  createdBy: 'hoanggbao',
  createdAt: new Date(),
  users: ['Bảo','Linh trang', 'Minh Hiếu', 'Thanh Xuân', 'Tường'],
  dateEstimate: new Date('2024-07-23'),
  expiredAt: new Date(),
  posts: posts,
  dateVotes: [
    {
      creator: 'Bảo',
      date: new Date('2024-07-20'),
      votes: ['Bảo', 'Hiếu', 'Trang', 'Xuân', 'Tường']
    },
    {
      creator: 'Bảo',
      date: new Date('2024-07-21'),
      votes: ['Bảo']
    },
  ]
}