document.querySelector('#check').addEventListener('click', check)

function check() {
  const month = document.querySelector('#month').value.toLowerCase()
  const day = document.querySelector('#day').value

  //Conditionals go here

if( month === 'january' && day >= 20 || month === 'february' && day <=18){
  document.querySelector('#signHere').innerText = 'Aquaruius'
} else if( month === 'february' && day >= 19 || month === 'march' && day <=20){
  document.querySelector('#signHere').innerText = 'Pisces'
} else if( month === 'march' && day >= 21 || month === 'april' && day <=19){
  document.querySelector('#signHere').innerText = 'Aries'
} else if( month === 'april' && day >= 20 || month === 'may' && day <=20){
  document.querySelector('#signHere').innerText = 'Taurus'
} else if( month === 'may' && day >= 21 || month === 'june' && day <=20){
  document.querySelector('#signHere').innerText = 'Gemini'
} else if( month === 'june' && day >= 21 || month === 'july' && day <=22){
  document.querySelector('#signHere').innerText = 'Cancer'  
} else if( month === 'july' && day >= 23 || month === 'august' && day <=22){
  document.querySelector('#signHere').innerText = 'Leo'
} else if( month === 'august' && day >= 23 || month === 'september' && day <=22){
  document.querySelector('#signHere').innerText = 'Virgo' 
} else if( month === 'september' && day >= 23 || month === 'october'&& day <=22){
  document.querySelector('#signHere').innerText = 'Libra'
} else if( month === 'october' && day >= 23 || month === 'november' && day <=21){
  document.querySelector('#signHere').innerText = 'Scorpio' 
} else if( month === 'november' && day >= 22 || month === 'december' && day <=21){
  document.querySelector('#signHere').innerText = 'Sagittarius' 
} else if( month === 'december' && day >= 22 || month === 'january' && day <=19){
  document.querySelector('#signHere').innerText = 'Capricorn'   
}
}