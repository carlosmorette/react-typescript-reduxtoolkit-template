import React, { ChangeEvent } from 'react';
import { Input } from './components'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './state/store'
import { updateEmail, updateName } from './state/manager/user/userSlice'

function App() {

  const { name, email } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    switch(name) {
      case 'name':
        dispatch(updateName(value))
        break
      case 'email':
         dispatch(updateEmail(value))
    }

  }

  return (
    <div className="App">
      <Input
        name="name"
        placeholder={"name"}
        onChange={onChangeInput}
      />

      <Input 
        name="email"
        placeholder={"email"} 
        type="email"
        onChange={onChangeInput}
      />

      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default App;
