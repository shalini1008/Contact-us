import styles from "./Button.module.css"
function Button({text,icon,lightmode,...rest}) {
  return (
    <button
     {...rest}
     className={lightmode?styles.outline_btn:styles.primary_btn}
    >
    {icon}
    {text}
    </button>
  )
}

export default Button