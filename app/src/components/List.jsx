import ("../components/styles/list.css");

const List = ({ listTitles }) => {
    return (
        <div className="list">
            {
                listTitles.map((title) => (
                    <div className="list-title">
                        <a className="link-to-cluster" href="/cluster"><h3>{ title.title }</h3></a>
                    </div>
                ))
            } 
        </div>
    );
};

export default List;