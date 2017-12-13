// var GroceryListItem = (item) => (
//   <li>{item}</li>
// );

// var Apples = () => (
//   <li> Apples</li>
// );

// var Bananas = () => (
//   <li> Bananas</li>
// );
// var groceryItems = [Apples, Bananas];

// var GroceryList = (props) => (
//   <ul>
//     <GroceryListItem item={props[0]} />
//     <GroceryListItem item={props[1]} />
//   </ul>
// );
// var GroceryList = (props) => {

//   var onListItemClick = (event) => {
//     console.log('I got clicked');
//   };

//   return (
//     <ul>
//       <li onClick={onListItemClick}>{props.items[0]}</li>
//       <li>{props.items[1]}</li>
//       <li>{props.items[2]}</li>
//     </ul>
//   );
// }
class GroceryListItem extends React.Component {


  constructor(props) {
    super(props);
    
    this.state = {
      done: false
    };
  }
  
  onListItemMouseOver() {
    this.setState({
      done: !this.state.done
    });
  }        
  
  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };
    return (
      <li style={style} onMouseOver={this.onListItemMouseOver.bind(this)}>{this.props.item}</li>
    );

  }

}


var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={['Apples', 'Bananas', 'Grapes']}/> 
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));





