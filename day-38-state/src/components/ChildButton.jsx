export default function ChildButton({ onclick, children }) {
    return (
        <button onclick={onclick}>
            {children}
        </button>
    )
}