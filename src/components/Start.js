import React,{ useState } from 'react'
import { game } from '../utils/contants'
import {useDispatch } from 'react-redux'
import { changeName } from '../reducers/nameReducer'

const Start =(props) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleChangeName = e => {
    setName(e.target.value.trim().toUpperCase())
  }

  const handleClickStart = () => {
    props.changePage(game);
    dispatch(changeName(name));
  }


    return (
      <div>
        <h1>Ready For War</h1>
        <input onChange={handleChangeName} value={name} type='text' placeholder='Enter your name' />
        <button onClick={handleClickStart}>Start</button>
      </div>
    )


}

export default Start