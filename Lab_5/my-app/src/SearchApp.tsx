import React, { useState } from 'react';
import type { User } from './types';

export const SearchApp = () => {
  const INITIAL_DATA: User[] = [
    { name: "Alice", email: "alice@mail.com", age: 25 },
    { name: "Bob", email: "bob@mail.com", age: 30 },
    { name: "Charlie", email: "charlie@mail.com", age: 22 },
    { name: "David", email: "david@mail.com", age: 28 },
    { name: "Eve", email: "eve@mail.com", age: 35 },
  ];

  const [users] = useState<User[]>(INITIAL_DATA);
  const [filteredUsers, setFilteredUsers] = useState<User[]>(INITIAL_DATA);
  
  const [searchTerm, setSearchTerm] = useState<string>("");


  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    

    setFilteredUsers(
      users.filter((u) =>
        u.name.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSearchTerm("");
    setFilteredUsers(users);
  };

  return (
    <div>
      <h2>User Search</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Search by name..." 
          value={searchTerm}
          onChange={handleSearch} 
        />
        <button onClick={handleClear} style={{ marginLeft: '10px' }}>
          Clear
        </button>
      </div>

      <div>
        {filteredUsers.length > 0 ? (
          <ul>
            {filteredUsers.map((user) => (
              <li key={user.email}>
                <strong>{user.name}</strong> ({user.age}) - {user.email}
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchApp;