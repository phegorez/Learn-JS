const profileID = document.getElementById('profile-id')
const profileName = document.getElementById('profile-name')
const profileEmail = document.getElementById('profile-email')
const profileAvatar = document.getElementById('profile-avatar')
const profileAddress = document.getElementById('profile-address')
const companyName = document.getElementById('profile-company-name')
const companyBs = document.getElementById('profile-company-bs')

const display = (profile, index) => {
    profileID.innerText = profile.id
    profileName.innerText = profile.name
    profileEmail.innerText = profile.email
    profileAvatar.src = `https://api.dicebear.com/5.x/adventurer/svg?seed=${index}`
    profileAddress.innerText = `${profile.address.street}, ${profile.address.suite}, ${profile.address.city}, ${profile.address.zipcode}`
    companyName.innerText = `${profile.company.name}, ${profile.company.catchPhrase}`
    companyBs.innerText = profile.company.bs
}

const fetchEmployees = async (index) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${index}`)
    return await data.json()
}

const run  = async () => {
    
    const randomIndex = Math.floor(Math.random() * 10 + 1)

    const profile = await fetchEmployees(randomIndex)

    display(profile, randomIndex)
}

run()














































