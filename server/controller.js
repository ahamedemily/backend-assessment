const goalMotivation = [
{ 
    motivationId: 1,
    motivation: `Don't give up`
},
{
    motivationId: 2,
    motivation: `You can do it!`
},
{
    motivationId: 3,
    motivation: `You are better than your worst days`
},
{
    motivationId: 4,
    motivation: `Avoid negativity`
},
{
    motivationId: 5,
    motivation: `Take care of your body and mind`
},
{
    motivationId: 6,
    motivation: `Be kind to yourself`
},
{
    motivationId: 7,
    motivation: `It's a bad day, not a bad life`
}

];

let globalId = 8;


module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["You will recieve good news very soon", "You are on the right path", "You are going to have a good day today.","You are with your soulmate","Love and happiness is coming your way very soon!"];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    getAngelNumber: (req, res) => {
        const angelNumbers = ["111: INTUITION - TRUST YOUR GUT & LISTEN TO YOUR HEART", "222: ALIGNMENT - YOU ARE IN THE RIGHT PLACE AT THE RIGHT TIME","333: SUPPORT - YOUR SPIRIT GUIDES ARE SENDING YOU LOVE, SUPPORT & GUIDANCE","444: PROTECTION - THE UNIVERSE IS PROTECTING YOU","555: CHANGE - SOMETHING NEW IS COMING","666: REFLECT - IT'S TIME FOR A SPIRITUAL AWAKENING","777: LUCK - WONDERFUL THINGS ARE ABOUT TO HAPPEN","888: BALANCE - EVERYTHING IS FALLING INTO PLACE AS IT'S MEANT TO BE","999: RELEASE - IT'S TIME TO LET GO OF WHAT'S NO LONGER SERVING YOU"]
      
        // choose random angel number
        let randomIndex = Math.floor(Math.random() * angelNumbers.length);
        let randomAngelNumber = angelNumbers[randomIndex];
      
        res.status(200).send(randomAngelNumber);
    },
    postMotivation: (req, res) => {
        const {motivation} = req.body;
        const newObj = {
            motivationId:globalId,
            motivation
        }; 
        goalMotivation.push(newObj)
        res.status(200).send(newObj)
    },
};
