import Items from "../items/Items";
import css from '../lists/List.css';


function List(props) {
  return (
    <div className="List" >
        {props.value1}
        <h3>{props.value2}
        </h3>
        {/* {props.value3} */}
        <h1>Hello React{props.value}</h1>
        < Items Color = 'yellow' padding = '5px' />
      </div>
    );
  }
  
  export default List;
  