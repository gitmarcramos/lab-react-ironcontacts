import "./App.css";
import React from "react";
import contact from "./contacts.json";
const fiveContact = contact.slice(0, 5);

class App extends React.Component {
  state = {
    contact: fiveContact,
  };

  /* -------------------------- // Add random contact ------------------------- */
  addRandomContact() {
    this.setState({
      contact: [
        ...this.state.contact,
        contact[Math.floor(Math.random() * contact.length)],
      ],
    });

    /* -- ===> ca fonctionne mais la solution du haut est visiblement mieux... -- */
    // const actualState = [...this.state.contact];
    // actualState.push(contact[Math.floor(Math.random() * contact.length)]);
  }

  /* ----------------------------- // Sort by name ---------------------------- */
  sortByName() {
    const actualState = [...this.state.contact];
    actualState.sort((a, b) => {
      return a.name > b.name;
    });
    this.setState({ contact: actualState });
  }

  /* -------------------------- // Sort by popularity ------------------------- */
  sortByPopularity() {
    const actualState = [...this.state.contact];
    actualState.sort((a, b) => {
      return a.popularity < b.popularity;
    });
    this.setState({ contact: actualState });
  }

  /* -------------------------------- // Delete ------------------------------- */
  delete(index) {
    const actualState = [...this.state.contact];
    actualState.splice(index, 1);
    this.setState({ contact: actualState });
  }

  render() {
    return (
      <div className="App">
        <div className="btn-container">
          <button className="btn btn-random"onClick={() => this.addRandomContact()}>
            Add random contact
          </button>
          <button className="btn"onClick={() => this.sortByName()}>Sort by name</button>
          <button className="btn"onClick={() => this.sortByPopularity()}>
            Sort by popularity
          </button>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Delete Celebrity</th>
              </tr>
            </thead>
            <tbody>
              {this.state.contact.map((contact, index) => {
                return (
                  <tr className="tr-style" key={index}>
                    <td className="td-pic">
                      <img src={contact.pictureUrl} alt="some text" />
                    </td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity}</td>
                    <td className="delete-btn">
                      <button className=" btn-delete"
                        onClick={() => {
                          this.delete(index);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
