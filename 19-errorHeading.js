function bootNavigation(mapLoaded) {
    try {
        console.log(`Is Navigation Loaded${mapLoaded}`)
        if (!mapLoaded) {
            throw new Error("Map was not passed in this function")
     
        }
        return 'Nav is Ok'
    }
    catch (error) {

        console.log(error)
        console.log(`Navvigation Failed ${error.message}`)

    }
    finally {
        console.log("Navbar squence complted")

    }
}
const status1 = bootNavigation(true)
console.log("Rasult:", status1)