interface User {
  id: string;
  name: string;
  avatar: string;
}

export const DUMMY_USERS: User[] = [
  { id: "0", name: 'John Doe' , avatar: 'user1.jpg' },
  { id:"1", name: 'Ana Doe' , avatar: 'user3.png' },
  { id: "2", name: 'Fernando alves' , avatar: 'user4.png' },
  { id: "3", name: 'Carlos Pereira' , avatar: 'user2.jpg' },
];
