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