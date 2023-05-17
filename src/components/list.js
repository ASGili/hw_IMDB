import ListElement from "./listElement"

const List = ({movieList}) => {

    console.log(movieList)
    const listComponents = movieList.map((movie)=>{
        return (<ListElement key={movie.id} name={movie.name} url={movie.url}/>)
    })

    return (
        <ul>
            {listComponents}
        </ul>
    )
};

export default List