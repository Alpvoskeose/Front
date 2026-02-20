import { useState } from 'react';
import AddArticle from './AddArticle';
import ArticleList from './ArticleList';

export default function ArticleManager() {
  const [articles, setArticles] = useState([{ id: 1, title: 'React', summary: 'Intro' }]);
  const [title, setTitle] = useState(''), [summary, setSummary] = useState('');

  const onClickAdd = () => {
    if (title && summary) {
      setArticles([...articles, { id: Date.now(), title, summary }]);
      setTitle(''); setSummary('');
    }
  };

  return (
    <div>
      <AddArticle 
        name="Articles" title={title} summary={summary} 
        onChangeTitle={e => setTitle(e.target.value)} 
        onChangeSummary={e => setSummary(e.target.value)} 
        onClickAdd={onClickAdd} 
      />
      <ArticleList articles={articles} onClickRemove={id => setArticles(articles.filter(a => a.id !== id))} />
    </div>
  );
}