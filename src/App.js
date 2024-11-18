import { Movie, MovieDetail } from './pages';
import {Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom'

function App() {
  return (
		<Router>

      <div>
        <Link to={'/'} >Home Page</Link>
      </div>

			<Routes>
				<Route path='/' element={<Movie />}/>
				<Route path='/detail/:id' element={<MovieDetail />}/>
			</Routes>
		</Router>
	)
}

export default App;
