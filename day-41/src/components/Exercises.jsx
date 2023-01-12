export default function Exercises() {

    // function findMax(a, b) {
    //     return Math.max(a, b)
    // }

    // console.log(findMax(1, 8))

    function findNumberInArray(arr, num) {
        for (let i = 0; i < arr.length; i++) {
            if (num === arr[i]) {
                return i
            }
        }
        return -1;

    }

    const a = [1, 2, 4, 5, 6, 7]
    console.log(findNumberInArray(a, 6)) // -1
    console.log(findNumberInArray(a, 4)) // 2




    function randomNumber(a, b) {
        let max = Math.max(a, b);
        let min = Math.min(a, b);

        let c = Math.floor(Math.random() * (max - min + 1) + min)
        return c
    }
    console.log(randomNumber(2, 5)) //3



    function findAverage(arr) {
        let sum = 0;


        arr.map(n => {
            sum += n;
        })
        return sum / arr.length
    }
    console.log(findAverage(a)) // 3


    function strToLowerCase(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].toUpperCase()
        }

    }
    // console.log(strToLowerCase(b)) // ["A", "B", "C", "D"]


    function isPrime(num) {
        if (num < 2) {
            return false;
        }

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    console.log(isPrime(5))



    return (
        <div>
            <h1>Day-41-Exercises</h1>
        </div>
    )
}