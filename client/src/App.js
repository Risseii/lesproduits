
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import TodosProductos from './componentes/TodosProductos';
import NuevoProducto from './componentes/NuevoProducto';
import Producto from './componentes/Producto';
import ActualizarProducto from './componentes/ActualizarProducto';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <TodosProductos />} />
          <Route path="/nuevo" render={() => <NuevoProducto />} />
          <Route path="/producto/:id" exact render={(routeProps) => <Producto {...routeProps} />} />
          <Route path="/producto/editar/:id" render={() => <ActualizarProducto />} />

        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
