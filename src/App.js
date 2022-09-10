import { Route, Routes } from 'react-router-dom'
import QuizzList from './components/QuizzList/QuizzList'

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<QuizzList />} />
        <Route path="/quizzes/:quizzId/play" />
      </Route>
    </Routes>
  )
}

export default App
