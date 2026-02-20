import { useState } from 'react';

export default function ArticleItem({ article, onClickRemove }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <li>
      <a href={`#${article.id}`} onClick={(e) => { e.preventDefault(); setIsOpen(!isOpen); }}>{article.title}</a>
      <button onClick={() => onClickRemove(article.id)}>x</button>
      <p style={{ display: isOpen ? 'block' : 'none' }}>{article.summary}</p>
    </li>
  );
}