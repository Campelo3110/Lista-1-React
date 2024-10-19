function Estudante(prop){
    if(prop.estudante){
        return(
            <h1>Você é um estudante</h1>
        )
    }else{
        return(
            <h1>Você não é estudante</h1>
        )
    }
}
export default Estudante