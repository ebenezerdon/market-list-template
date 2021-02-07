import './App.css'

const App = () => {
  return (
    <div className="container">
      <h3 className="green-text center-align">Market List App</h3>
      <form className="add-item-form">
        <input type="text" placeholder="Name of item" required />
        <input type="number" placeholder="Price in USD" required />
        <button type="submit" className="waves-effect waves-light btn right">Add item</button>
      </form>
      <div className="card white darken-1">
        <div className="card-content">
          <form action="#">
            <div className="row">
              <p className="col s5">
                <label>
                  <input type="checkbox" />
                  <span className="black-text">Tomato</span>
                </label>
              </p>
              <p className="col s5">$5</p>
              <i className="col s2 material-icons delete-button">delete</i>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
