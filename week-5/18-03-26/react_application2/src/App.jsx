import './App.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Userlist from '../components/Userlist';
import Counter from '../components/counter';
function app(){

return(
  <div className=''>
    <Navbar/>
    <div >
 <Userlist/>
  </div>
    <Footer/>
</div>
)
}
export default app