export const loginSubmit = async (email, pass) => {
  let auth

  return await fetch('https://books.ioasys.com.br/api/v1/auth/sign-in', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: pass,
    }),
  })
    .then(res => {
      auth = res.headers.get('Authorization')
      return res.json()
    })
    .then(res => ({ res: res, auth: auth }))
}

export const getBooks = async (page, amoumt) => {
  let auth

  return await fetch(
    `https://books.ioasys.com.br/api/v1/books?page=${page}&amount=${amoumt}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  )
    .then(res => res.json())
    .then(res => res)
}
