import './App.css'
import Navbar from './components/Navbar/navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a Hockey Planet'}/>}/>
      <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
    
    <ItemDetailContainer/>
    </Routes>
   
    </BrowserRouter>

    
    </>
  )
}

export default App
