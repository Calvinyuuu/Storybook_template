import PropTypes from "prop-types"

export default function Button({ label, backgroundColor = "red", size = "md", onClick }) {
  //determine size of the button
  let scale = 1
  if (size === "sm") scale = 0.75
  if (size === "lg") scale = 1.5

  //create custom styles from props
  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
  }
  //return component with action, style, and labels
  return (
    <button onClick={onClick} style={style}>
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
}
