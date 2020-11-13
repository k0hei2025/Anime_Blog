import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {NavLink} from "react-router-dom"
const options = [
  { key: 1, text: <NavLink to="/shonen"> Shonen</NavLink>, value: 1 },
  { key: 2, text: <NavLink to="/sliceOfLife">Slice Of Life</NavLink>, value: 2 },
  { key: 3, text: <NavLink to="/romantic">Romantic</NavLink>, value: 3 },
  { key: 4, text: <NavLink to= "/comedy">Comedy </NavLink>, value: 4 },
]

const DropdownExampleSimple = () => (
  <Menu compact>
    <Dropdown text='Catagories' options={options} simple item />
  </Menu>
)

export default DropdownExampleSimple