function ListPicker({ values }) {
    const randIndex = Math.floor(Math.random() * values.length);
    const lis = values.map((value) => <li>{value}</li>);

    return (
        <div>
            <h3>The list of values</h3>
            <ul>
                {values.map((value, index) => (
                    <li key={index} style={{ color: value }}>
                        {value}
                    </li>
                ))}
            </ul>
            <p>Random element is: {values[randIndex]}</p>
        </div>
    );
}

export default ListPicker;
