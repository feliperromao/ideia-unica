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

export async function getStaticProps() {
    console.log('Passando pelo getStaticProps')

    const staticDate = new Date()
    const staticDateString = staticDate.toGMTString()

    return {
        props: { staticDateString },
        revalidate: 1
    }
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))


export default Tempo