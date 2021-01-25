function Tempo(props) {
    console.log('Passando pelo frontend')
    const dynanicDate = new Date()
    const dynanicDateString = dynanicDate.toGMTString()

    return (
        <div>
            <div>{dynanicDateString} (dinâmico)</div>
            <div>{props.staticDateString} (estático)</div>
            
        </div>
    )
}

export function getStaticProps() {
    console.log('Passando pelo getStaticProps')
    const staticDate = new Date()
    const staticDateString = staticDate.toGMTString()

    return {
        props: { staticDateString }
    }
}


export default Tempo