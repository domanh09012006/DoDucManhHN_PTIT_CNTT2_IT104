import React ,{ useState }from 'react'

function Toggle() {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      {toggle && <p>Tiêu đề văn bản</p>}
      <button onClick={handleToggle}>{toggle ? "an" : "hien"}</button>
    </div>
  );
}
export default Toggle