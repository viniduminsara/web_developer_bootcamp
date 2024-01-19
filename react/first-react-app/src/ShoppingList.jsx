import ShoppingListItem from "./ShoppingListItem";

function ShoppingList({ items }) {
    return (
        <ul>
            {items.map((i) => (
                // <ShoppingListItem 
                //     key = {i.name}
                //     name = {i.name}
                //     qty = {i.qty}
                //     completed = {i.completed}
                // />
                <ShoppingListItem key={i.name} {...i}/> //spread operator
                
            ))}
        </ul>
    );
}

export default ShoppingList;
