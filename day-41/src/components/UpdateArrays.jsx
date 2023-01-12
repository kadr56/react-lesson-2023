export default function UpdateArrays() {
    let a = [2, 3, 4, 5];
    console.log(a)
    a.push(6);
    console.log(a)
    a.unshift(1)
    console.log(a)
    a.pop()
    console.log(a)
    a.shift()
    console.log(a)
    a.splice(1, 1)
    console.log(a)
    a.slice(1, 2)
    console.log(a)

    console.log(a.reverse())
    let c = [1, 3, 2, 5, 11, 12, 13, 23, 100]

    // soft []
    c.sort((a, b) => a - b)
    console.log(c)


    let d = [1, 2]
    let e = [4, 5]
    const f = d.concat(e) // save in new array to make the changes
    console.log(f)
    d = [...d]
    console.log(e)

    console.log(c.filter(el => el > 5))

    return (
        <div >
            <p>Arrays</p>
        </div>
    )

}
