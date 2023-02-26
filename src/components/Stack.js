import PropTypes from "prop-types"

//incoming props with default values
export default function Stack({ children, spacing = 2, direction = "row", wrap = false }) {
  //determine custom styling
  const style = {
    display: "flex",
    gap: `${spacing * 0.25}rem`,
    flexWrap: wrap ? "wrap" : "nowrap",
    flexDirection: direction,
  }
  //return stack of divs
  return <div style={style}>{children}</div>
}

Stack.propTypes = {
  spacing: PropTypes.number,
  wrap: PropTypes.bool,
  direction: PropTypes.oneOf(["row", "column"]),
}
