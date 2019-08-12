import axios from 'axios';
import { browserHistory } from 'react-router';

import { 
  FETCH_USERS, 
  DELETE_USER, 
  USER_ERROR, 
  FETCH_USER,
  CREATE_USER,
  UPDATE_USER
} from './types';

const API_URL = 'http://localhost:3000';

export function fetchTodos() {
  return (dispatch) => {
    axios.get(`${API_URL}/users`)
      .then(response => {
        console.log(response);
        
        dispatch({ 
          type: FETCH_USERS,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch(todoError(error.response.data.error));
      });
  };
}

export function fetchTodo(id) {
  return (dispatch) => {
    axios.get(`${API_URL}/users/${id}`)
      .then(response => {
        console.log(response);
        
        dispatch({
          type: FETCH_USER,
          payload: response.data._id
        })
      })
      .catch(error => {
        dispatch(todoError(error.response.data.error));
      });
  };
}

export function deleteTodo({ _id }) {
  return (dispatch) => {
    axios.delete(`${API_URL}/users/${_id}`)
      .then(response => {
        dispatch({
          type: DELETE_USER,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch(todoError(error.response.data.error));
      });
  };
}

export function createTodo(props) {
  return (dispatch) => {
    axios.post(`${API_URL}/users`, props)
      .then(response => {
        dispatch({
          type: CREATE_USER,
          payload: response.data
        });
        browserHistory.push('/');
      })
      .catch(error => {
        dispatch(todoError(error.response.data.error));
      });
  };
}

export function updateTodo(id, props) {
  return (dispatch) => {
    axios.put(`${API_URL}/users/${id}`, props)
      .then(response => {
        dispatch({
          type: UPDATE_USER,
          payload: response.data
        });
        browserHistory.push('/');
      })
      .catch(error => {
        dispatch(todoError(error.response.data.error));
      });
  };
}

export function todoError(error) {
  return (dispatch) => {
    dispatch({
      type: USER_ERROR,
      payload: error
    });
  };
}