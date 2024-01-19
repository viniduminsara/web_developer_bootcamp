function ShoppingListItem({name, qty, completed}){
    return (
        <li style={{color: completed ? 'red' : 'grey',
            textDecoration: completed ? 'line-through' : 'none'}}>
        {name} - {qty}
        </li>
    )
}

export default ShoppingListItem