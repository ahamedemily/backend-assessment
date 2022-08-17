const baseURL =  `http://localhost:4000/api`

const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)

const angelNumberBtn = document.getElementById("angelNumberButton")

const getAngelNumber = () => {
    axios.get("http://localhost:4000/api/angelNumber/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
angelNumberBtn.addEventListener('click', getAngelNumber)

const displaySection = document.getElementById("display-section")
const displayMotivation = (motivation) => {
    const showMotivation = document.createElement("motivational")
        showMotivation.textContent = motivation
        displaySection.appendChild(showMotivation)
}

const postMotivationBtn = document.getElementById("add-motivation-btn")
const motivationInput = document.getElementById("add-motivation")
const postMotivationHandler = () => {
    const body = {
        motivation:motivationInput.value
    }
    console.log(motivationInput.value)
    axios.post(`${baseURL}/goal/motivation`,body)
    .then(res => {
        //console.log(res.data)
        motivationInput.value = ``
        displayMotivation(res.data.motivation)
    })
    .catch(err => console.log(err))
}

postMotivationBtn.addEventListener("click",postMotivationHandler)

const contactInfoBtn = document.getElementById("submitBtn")
const emailInput = document.getElementById("email")
const nameInput = document.getElementById("fullName")
const goalsInput = document.getElementById("goals")
const postContactHandler = () => {
const body2 = {
    email:email.value,
    name: fullName.value,
    goals: goals.value
    }
    axios.post(`${baseURL}/goal/contact`, body2)
    .then(res => {
        console.log(res.data)
        email.value = ``
        fullName.value = ``
        currentGoals.value = ``
        displayContact(res.data.contact)
    })
    .catch(err => console.log(err))
}

submitBtn.addEventListener('click',postContactHandler)