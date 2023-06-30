import "./styles.css";

export default function Button({children, active, setActive}) {
    return (
        <button className={active ? "btn-clicked" : "btn"} onClick={() => setActive(!active)}>
            {children}
        </button>
        )
}