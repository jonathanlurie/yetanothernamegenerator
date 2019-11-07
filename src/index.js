import adjectives from './adjectives'
import persons from './persons'

export default function generate(){
  let adj = adjectives[~~(Math.random() * (adjectives.length - 1))]
  let pers = persons[~~(Math.random() * (persons.length - 1))]
  return `${adj} ${pers}`.toLowerCase()
}
