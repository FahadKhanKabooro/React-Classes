
import List from "./components/lists/List";




function App() {
  // async function fn(){
  //   const pr = await fetch('https://fakestoreapi.com/products/1')
  //   const response = await pr.json()
  //   console.log(response)

  // }
  // fn()
  const arr = [1,2,3,4,5,6]
  const obj = {name : 'Fahad',
lastname: 'kabooro'}

  return (
    <>
    <List value = "day2" value1 = 'this is a tutorial' value2 ={arr} value3 = {obj}   />
 
 
    </>
    );
}

export default App;
