export default function Button({theme}) {
  switch (theme){
    case "contained":
      return <Contained/>
    case "outlined":
      return <Outlined/>
    default:
      return <Default/>;
  }
}

export function Default(){
   const style = {
    padding: `${1.5}rem ${1.5}rem`,
    border: "none",
    backgroundColor: "transparent",
  }
  return (
    <button style={style}>Default</button>
  )
}

export function Contained(){
  const style = {
    margin: 0, 
    padding: 0,
    textAlign: "center",
    border: "2px solid #7FF2F8",
    backgroundColor: "#7FF2F8",
    height: "40px",
    width: "100px",
    fontSize: "1.3em",
    borderRadius: "10%",
  }
 return (
   <button style={style}>Contained</button>
 )
}

export function Outlined(){
  const style = {
   margin: 0, 
   padding: 0,
   textAlign: "center",
   border: "2px solid #7FF2F8",
   backgroundColor: "transparent",
   height: "40px",
   width: "100px",
   fontSize: "1.3em",
   borderRadius: "10%",
 }
 return (
   <button style={style}>Outlined</button>
 )
}
