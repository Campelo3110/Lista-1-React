function Nivel(prop) {
    return (
      <h1>
        {prop.nivel === "iniciante" ? "Bem-vindo, iniciante!"
          : prop.nivel === "intermediario"
          ? "Você está progredindo!"
          : prop.nivel === "avancado"
          ? "Parabéns, especialista!" : "Você não é nada ainda!"}
      </h1>
    )
  }
  
  export default Nivel
  