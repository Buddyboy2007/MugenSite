
async function getCharacters() {
  const res = await fetch("http://127.0.0.1:5057/api/characters");
  if (!res.ok) throw new Error("Request failed");
  
  console.log(res.body);
  const data = await res.json();    
  console.log(data);
  return data;
}

characters = getCharacters();