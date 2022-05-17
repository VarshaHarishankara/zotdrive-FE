import React from 'react';
import { Link } from 'react-router-dom';
import {HomeView} from './styles'

export const ZDHome = () => {
    return(
      <HomeView>
        <ul>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </HomeView>
    )
}