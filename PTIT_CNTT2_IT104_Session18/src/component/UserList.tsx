import React, { useMemo } from 'react';

interface User {
  id: number;
  name: string;
  age: number;
}
function UserList() {
  const users: User[] = [
    { id: 1, name: 'An', age: 1 },
    { id: 2, name: 'Bình', age: 20 },
    { id: 3, name: 'Chi', age: 25 },
  ];
  const user = useMemo(() => {
    return users.filter((user) => user.age > 18);
  }, [users]);
  return (
    <div>
      <h2>Danh sach:</h2>
      <ul>
        {user.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} tuổi)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
