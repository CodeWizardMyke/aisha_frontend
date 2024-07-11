import "./App.css"

import {Link} from 'react-router-dom'

function AppPublic() {
  return (
      <div className="container">
        <Link to="/manager/auth">Ir para manager</Link>
      </div>
  );
}

export default AppPublic;
