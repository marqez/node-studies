// não aceita repetição/ não indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)//Set(5) { 'Vasco', 'São Paulo', 'Palmeiras', 'Corinthians', 'Flamengo' }
console.log(times.size)//5
console.log(times.has('vasco'))//false (case sensitive)
console.log(times.has('Vasco'))//true
times.delete('Flamengo')
console.log(times.has('Flamengo'))//false

const nomes = ['Cristiane', 'Nicoly', 'Aline', 'Fininho', 'Aline']
const nomesSet = new Set(nomes)//aceita array como entrada
console.log(nomesSet)//Set(4) { 'Cristiane', 'Nicoly', 'Aline', 'Fininho' } <= não aceita repetição.