const DescendingOrder = (props)=>{
    const sortedList = props.array.sort((a,b)=>b-a)
    return (
        <div>
            <h2>{props.value}</h2>
            <ul>
                {sortedList.map((item)=>{
                   return <li key={item}>{item}</li>
                })}
            </ul>
        </div>
    )
}

export default DescendingOrder