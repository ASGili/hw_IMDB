import List from './list'
const ListBox = (props)=>{
    return (<section className='box'>
    <h3>Upcoming Film Releases:</h3>
    <List movieList={props.movieList}/>
    </section>)
}

export default ListBox