const React = require('react')
class Show extends React.Component {
   render () {
    const pokem = this.props.pokem
    return (
        <div>
        <h1> Show Pokemon </h1>
       <h1>{pokem.name}</h1> 
         <img src={pokem.img} alt={pokem.name} ></img>
          {/* "Added dynamic anchor tags to index.jsx " */}
        </div>
     );
    }
 }
 module.exports  = Show;