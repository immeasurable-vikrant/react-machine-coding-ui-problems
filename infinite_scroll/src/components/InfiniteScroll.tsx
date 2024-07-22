import { useEffect, useState } from "react"

const InfiniteScroll = () => {
        const [count, setCount] = useState(50)

        useEffect(() => {

                const onScroll = () => {
                        if(window.innerHeight + window.scrollY >=  window.document.body.offsetHeight - 30){
                                setCount(count + 10)
                        }
                }

                window.addEventListener('scroll', onScroll)
                return () => window.removeEventListener('scroll', onScroll)
        }, [count])

        const elements = [];

        for(let i = 0; i < count; i ++){
                elements.push(<div key={i}>{i}</div>)
        }
        return(
                <div>{elements}</div>
        )
}
export default InfiniteScroll