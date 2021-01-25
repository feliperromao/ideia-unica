function Tempo(props) {
    console.log('Passando pelo frontend')
    const dynanicDate = new Date()
    const dynanicDateString = dynanicDate.toGMTString()

    return (
        <div>
            <div>{dynanicDateString} (dinâmico)</div>
            <div>{props.staticDateString} (estático - com delay)</div>
            
        </div>
    )
}

export async function getStaticProps() {
    console.log('Passando pelo getStaticProps')
    console.log('Adicionando delay de 5 segundos')

    await delay(5000)

    const staticDate = new Date()
    const staticDateString = staticDate.toGMTString()

    return {
        props: { staticDateString }
    }
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))


export default Tempo