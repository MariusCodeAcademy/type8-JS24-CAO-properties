console.log('add');
const baseUrl = 'https://radial-reinvented-shoe.glitch.me';

async function createProperty() {
  const res = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      city: 'Kaunas',
      price: 50000,
      image: 'https://placeimg.com/640/480/any',
      description: 'this is good place',
    }),
  });
  const ats = await res.json();
  console.log('ats ===', ats);
  if (ats.error) {
    // pranesti apie klaida
    console.log('prasome patitrinti duomenis');
  }
  if (ats.msg) {
    console.log('irasyta sekmingai');
  }
}
createProperty();
