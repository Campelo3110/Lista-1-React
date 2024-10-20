function Desconto(prop){
  return(
    <h1>{prop.temDesconto ? "Desconto aplicado" : "Sem desconto"}</h1>
  )  
}

export default Desconto