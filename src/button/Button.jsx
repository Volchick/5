export function Button() {
    const test = "something"
    return <button onClick={() => {
        click(test)
        hello()
    }}>Custom button</button>
}

function click(test) {
    console.log("click", test)
}

function hello() {
    console.log("hello")
}