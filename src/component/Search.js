
function Search(props) {


function handleOnChange (event) {
    event.preventDefault()
    const  input = event.target.value
    return props.input  
}



    return(
<div className="wrapper form-box">
    <form action="">
        <input type="text" onChange={props.handleOnChange} placeholder="&#x1F50D; Search for country..."/>
    </form>
</div>

    )

} 







export default Search