import {Link} from 'react-router-dom'


export default function NavBar(){
    return(
    <nav>
    <Link to='/'>Home</Link>
    <Link to='/createpost'>Create Post</Link>
    <Link to='/login'>Login</Link>
    </nav>
    )
}