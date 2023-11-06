import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Products from './Components/Products';
import Single from './Components/Single';

const produits = [
  {
    id: 1,
    title: 'PC Portable Gamer HP VICTUS',
    price: '7490 DH',
    thumbnail : 'https://i.pravatar.cc/222'
  },
  {
    id: 2,
    title: 'PC Portable Gamer',
    price: '2190 DH',
    thumbnail : 'https://i.pravatar.cc/222'
  },
  {
    id: 3,
    title: 'Pc Portable Chromebook Acer',
    price: '3640 DH',
    thumbnail: 'https://i.pravatar.cc/222'
  },
  {
    id: 4,
    title: 'PC Portable - HUAWEI',
    price: '1270 DH',
    thumbnail: 'https://i.pravatar.cc/222'
  },
];

function App() {
  return (
   <Routes>
    <Route path='/' element={<Products produits={produits}/>}/>
    <Route path='/product/:id' element={<Single produits={produits}/>}/>

  
   </Routes>
   
   
   
    // <div className="App">
    //   <ul>
    //     <li> <Link to='/'>Home</Link> 
    //     </li>
    //     {/* {'like a href in html'} */}
    //   <li> <Link to='/blog'>Blog</Link> </li> 
    //     {/* {'<Link to="/"> </Like>'} */}
    //     <li><Link to='/about'>About</Link></li>

    //   </ul>
    //   <div className='main-route-place'>
    //     <Routes>
    //       <Route path='/' element={<Home />} />
    //       <Route path='/blog' element={<Blog />} />
    //       <Route path='/about' element={<About />} />
    //     </Routes>
    //   </div>
    // </div>
  );
}
// function Home() {
//   return (
//     <div>
//       <h1>Home</h1>
//     </div>
//   )
// }
// function Blog() {
//   return (
//     <div>
//       <h1>Blog</h1>
//     </div>
//   )
// }
// function About() {
//   return (
//     <div>
//       <h1>About</h1>
//     </div>
//   )
// }
export default App;
