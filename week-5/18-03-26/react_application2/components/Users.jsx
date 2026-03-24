
function Users(props){
    let {user}=props
    return(
        <div className="shadow-2xl m-9 text-amber-800 gap-10 rounded-2xl">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <img src={user.image} alt="" className="block mx-auto rounded-3xl"/>
        </div>
    )
}
export default Users