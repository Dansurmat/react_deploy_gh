import ItemList from "./itemList"

const Content = ({items ,  handleCheck , handleDelete}) => {
    return(
        <>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                 />
            ) : (
                <p style={{marginTop: '2rem '}}>Your list is empty</p>
            )}
        </>
    )
}

export default Content
// const handleNameChange = () => {
//     const name = ['Bob' , 'Kelvin' , 'Dan'];
//     const int = Math.floor(Math.random() * 3);
//     setName(name[int]) 
// }

// const handleClick = () => {
//     setCount(count + 1)
//     setCount(count + 1)
//     console.log(count);
// }
// const handleClick2 = () => {
//     console.log(count);
// }
// const handleClick3 = (e) => {
//     console.log(e.target.innerText);
// }
