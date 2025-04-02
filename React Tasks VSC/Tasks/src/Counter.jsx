// import React , {Component} from 'react'

// class Counter extends Component {
//     constructor(props){
//         super(props);
//         this.state = {count:0};
//     }
//     Increment=() => {
//         this.setState({count: this.state.count+1})
//     }
//     render(){
//         return(
//             <>
//                 <h2>Count: {this.state.count}</h2>
//                 <button onClick={this.Increment}>Increase</button>
//             </>
//         )
//     }
// }
// export default Counter

import React, { useState } from 'react'

export default function Counter() {
    const [count,setCount] = useState(0);
  return (
    <>
        <h2>Count: {count}</h2>
        <button onClick={()=>setCount(count+1)}>Increase</button>
    </>
  )
}
