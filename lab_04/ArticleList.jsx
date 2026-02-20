import ArticleItem from "./ArticleItem";

export default function ArticleList({ articles, onClickRemove }) {
    return (
        <ul>
            {articles.map(a => (
                <ArticleItem key={a.id} article={a} onClickRemove={onClickRemove} />
            ))}
        </ul>
    );
}