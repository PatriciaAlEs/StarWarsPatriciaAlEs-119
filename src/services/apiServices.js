const apiServices = {}

apiServices.getPeople = async () => {
    try {
        const response = await fetch('https://www.swapi.tech/api/people')
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching people:', error)
        throw error
    }
}

apiServices.getVehicles = async () => {
    try {
        const response = await fetch('https://www.swapi.tech/api/vehicles')
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching vehicles:', error)
        throw error
    }
}

apiServices.getPlanets = async () => {
    try {
        const response = await fetch('https://www.swapi.tech/api/planets')
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching planets:', error)
        throw error
    }
}

apiServices.getDetalles = async () => {
    try {
        const response = await fetch('https://www.swapi.tech/api/detalles')
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching detalles:', error)
        throw error
    }
}

apiServices.getFavoritos = async () => {
    try {
        const response = await fetch('https://www.swapi.tech/api/favoritos')
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching favoritos:', error)
        throw error
    }
}

export default apiServices  