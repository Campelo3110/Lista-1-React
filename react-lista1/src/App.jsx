import { useState } from 'react'
import './App.css'
import Saudacao from './components/Saudacao'
import Nome from './components/Nome'
import ElementoIf from './components/ElementoIf'
import Idade from './components/Idade'
import Estudante from './components/Estudante'
import Nota from './components/Nota'
import Desconto from './components/Desconto'
import Online from './components/Online'
import Nivel from './components/Nivel'
import Botao from './components/Botao'

function App() {
  return (
    <>
    <Saudacao/>
    <Nome nome="Campelo"/>
    <ElementoIf autenticado={false}/>
    <Idade idade={15}/>
    <Estudante estudante={true}/>
    <Nota nota={69}/>
    <Desconto temDesconto={false}/>
    <Online online={false}/>
    <Nivel nivel="intermediario"/>
    <Botao logado={true}/>
    </>
  )
}

export default App
