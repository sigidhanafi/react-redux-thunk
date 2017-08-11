// ACTION CREATOR
export function request () {
  return {
    type: 'REQUEST',
    data: []
  }
}

export function failure () {
  return {
    type: 'FAILURE',
    data: []
  }
}

export function success (data) {
  return {
    type: 'SUCCESS',
    data
  }
}

// ACTION
export function fetchGenre () {
  return (dispatch) => {
    dispatch(request())
    setTimeout(() => {
      const response = [
        {id: '1', name: 'Action'},
        {id: '2', name: 'Horor'},
        {id: '3', name: 'Adventure'},
        {id: '4', name: 'Drama'},
        {id: '5', name: 'Romance'}
      ]
      dispatch(success(response))
    }, 5000)
  }
}
