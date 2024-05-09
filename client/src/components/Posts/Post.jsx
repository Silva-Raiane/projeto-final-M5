import style from "./style.module.css";

export default function Post({title, content, createdAt}){
    return (
      <main>
        <div className="post">
          <div className="texts">
            <h2>{title}</h2>
            <p className="info">
              <time>{createdAt}</time>
            </p>
            <p className="summary">
              {content}
            </p>
          </div>
        </div>
        </main>
    );
}