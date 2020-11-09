import{ useState } from 'react' ;

function Home() {
    return (
        <div>
            <h1>Home_Brn</h1>
            <contador />
        </div>
    )
}
function contador(){
    const [contador,setcontador] = useState(1);

    function AdicionarContador() {
        setcontador(contador + 1)
    }

    return
    <div>
        <div>{contador}</div>
        <button onClick={AdicionarContador}>Adicionar</button>
    </div>
}

export default Home