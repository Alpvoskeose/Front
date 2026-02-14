import React from 'react';
import type { User } from './types';



interface UserCardProps {
  user: User;
  isActive?: boolean; 
  children: React.ReactNode; 
}

const UserCard = ({
  user,
  isActive = true, 
  children
}: UserCardProps) => {
  return (
    <div 
      style={{ 
        border: '1px solid #ccc', 
        padding: '20px', 
        borderRadius: '8px',
        marginBottom: '20px',
        opacity: isActive ? 1 : 0.5 
      }}
    >
      <h2>{user.name}</h2>
      <p>Email: {user.email} | Age: {user.age}</p>
      <div style={{ marginTop: '10px' }}>
        {children}
      </div>
    </div>
  );
};

export default UserCard;