export async function getProtectedData(token) {
  const response = await fetch('http://localhost:5090/api/protected', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error('Não autorizado');
  }

  return response.json();
}
