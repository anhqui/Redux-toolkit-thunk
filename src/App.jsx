import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementAsync, incrementByAmount } from './redux/counter'
import { signIn, signOut } from './redux/isLogged'


function App() {

  const { count } = useSelector(state => state.counter)
  const { loggedIn } = useSelector(state => state.logged)

  const dispatch = useDispatch()

  return (
    <div className='App'>
      {loggedIn && <p>Only logged In user can see me!</p>}
      <h1>The count is {count}</h1>

      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(50))}>increment By 50</button>
      <button onClick={() => dispatch(incrementAsync(50))}>increment Async By 50</button>
      <button onClick={() => dispatch(signIn())}>Sign In</button>
      <button onClick={() => dispatch(signOut())}>Sign Out</button>


    </div>
  )
}

export default App
