export async function login(email, password) {
  const response = await fetch('http://localhost:5090/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  if (!response.ok) {
    throw new Error('Login falhou');
  }

  const data = await response.json();
  return data.token;  // { token: "...." }
}
