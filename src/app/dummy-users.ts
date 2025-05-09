interface User {
  id: string;
  name: string;
  avatar: string;
}

export const DUMMY_USERS: User[] = [
  { id: 'u0', name: 'John Doe', avatar: 'user1.jpg' },
  { id: 'u1', name: 'Ana Doe', avatar: 'user3.png' },
  { id: 'u2', name: 'Fernando alves', avatar: 'user4.png' },
  { id: 'u3', name: 'Carlos Pereira', avatar: 'user2.jpg' },
];
