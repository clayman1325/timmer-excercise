import { useState } from "react"

const Timmer = () => {
  const [timmerNum, setTimmerNum] = useState(5)

  const handleChange = (e) =>{
    const value = e.target.value
    if (value < 0 || value > 120) {
      alert("your numver should be in the range 0 and 120")
      return
    }

    setTimmerNum(Number(value))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    countDown(timmerNum)
  }

  const countDown = (myNum) => {
    setTimmerNum(myNum)

    if (myNum < 1) return
    
    setTimeout(() => {
        countDown(myNum - 1)
    }, 1000);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Timmer:
          <input type="text" value={timmerNum} onChange={handleChange} />
        </label>
        <input type="submit" value="Start" />
      </form>

    </div>
  )
}

export default Timmer