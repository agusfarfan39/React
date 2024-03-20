import './App.css'
import Navbar from './components/Navbar/navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <>
    <Navbar />
    <ItemListContainer greeting={'Bienvenidos a Hockey Planet'}/>
    <ItemDetailContainer/>
    </>
  )
}

export default App
