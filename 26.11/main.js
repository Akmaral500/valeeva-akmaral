function test() {
  let name = prompt('Введите ваше имя')
  document.getElementById('name').textContent = "Имя:"+ name
  document.getElementById('name').style.cssText = 'color: blue; font-size: 20px'

  let surname = prompt('Введите вашу фамилию')
  document.getElementById('surname').textContent = "Имя:"+ surname
  document.getElementById('surname').style.cssText = 'color: orange; font-size: 20px'
  let age = prompt('Введите ваш возраст')
  document.getElementById('age').textContent = "Имя:"+ age
  document.getElementById('age').style.cssText = 'color: green; font-size: 20px'

  let speciality = prompt('Введите вашу специальность')
  document.getElementById('speciality').textContent = "Имя:"+ speciality
  document.getElementById('speciality').style.cssText = 'color: blue; font-size: 20px'

  let birth = prompt('Введите вашу дату рождения')
  document.getElementById('birth').textContent = "Имя:"+ birth
  document.getElementById('birth').style.cssText = 'color: brown; font-size: 20px'

  let me = prompt('О себе')
  document.getElementById('me').textContent = "Имя:"+ me
  document.getElementById('me').style.cssText = 'color: red; font-size: 20px'
}

