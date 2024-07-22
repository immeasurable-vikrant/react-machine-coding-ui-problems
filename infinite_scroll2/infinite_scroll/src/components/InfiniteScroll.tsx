import { useEffect, useRef } from "react";

const InfiniteScroll = (props) => {
  const {renderItems, data, isLoading, setPage, fetchResults, setIsLoading } = props;
  const observer = useRef(null)


  const fetchData =() => {
    setIsLoading(true)
    fetchResults()
  }


  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting){
        setPage((prev) => prev + 1)
        fetchData()
        setIsLoading(false)
      }
    })
    const target = document.querySelector("#scroll-anchor");
    if (target) {
      observer.current.observe(target);
    }
    return () => observer.current.disconnect()
  }, [])


  return <div>
    <div>{isLoading && <h2>LOADING.....</h2>}</div>
    <h2>Infinire Scrill</h2>
    {renderItems(data)}
    <div id="scroll-anchor" style={{ height: "1px" }}></div>
  </div>
}

export default InfiniteScroll