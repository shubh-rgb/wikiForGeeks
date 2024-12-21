import React, { useEffect, useState } from 'react';

function Articles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('http://backend-service:5000/articles')
            .then((response) => response.json())
            .then((data) => setArticles(data));
    }, []);

    return (
        <div>
            <h2>Articles</h2>
            {articles.map((article, index) => (
                <div key={index}>
                    <h3>{article.title}</h3>
                    <p>{article.content}</p>
                </div>
            ))}
        </div>
    );
}

export default Articles;
