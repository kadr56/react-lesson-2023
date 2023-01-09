export default function Button() {
    function handleClick() {
        alert('You clicked me');
    }


    return (
        <button onClick={handleClick}>
            {/* // <button onClick={() =>
            alert('You clicked me')
        }> */}
            Click me
        </button >
    );
}
