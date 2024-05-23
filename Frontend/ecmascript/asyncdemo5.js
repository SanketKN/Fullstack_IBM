const myFunc = async () => {
    return "Hello"
}

const main = async () => {
    try {
        const result = await myFunc()
        console.log(result)
    }
    catch(error){

    }
}
main()