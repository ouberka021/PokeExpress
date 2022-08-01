const React = require('react');

    class Index extends React.Component {
      render() {
          const { pokemon } = this.props;
          return (
                  <div>
                      <h1>Pokemon Index Page</h1>
                      <ul>

                          {pokemon.map((pokem, i) => {
                              return (
                                  <li>
                                     
                                      <a href={`/show/${i}`}>
                                          {pokem.name.charAt(0).toUpperCase() + pokem.name.slice(1)}
                                          {/* "I can view a list of all my pokemon in the browser" */}
                                      </a>
                                      <br />
                                  </li>
                              );
                          })}
                      </ul>
                  </div>
          );
      }
    }
    module.exports = Index;