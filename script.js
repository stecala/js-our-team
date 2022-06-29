const team = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    }
]
let outputWrapper=document.getElementById('output-wrapper')
let row=document.createElement('div')
row.classList.add('row','g-3')
outputWrapper.append(row)
     
for(let i=0; i<team.length;i++){
    //!milestone 1
    // console.log(`${team[i].name} ${team[i].role} ${team[i].image}`)
    //! milestone 2
    // output.innerHTML += `
    // ${team[i].name} ${team[i].role} ${team[i].image}`
    //! bonus 1
    // let newImg =document.createElement('img')
    // newImg.setAttribute('src', `./img/${team[i].image}`)
    // output.innerHTML+= `
    //  ${team[i].name} ${team[i].role} `
    // output.append(newImg)
    //! bonus 2
    let newCell=document.createElement('div')
    newCell.classList.add('col-4')
    let newImg=document.createElement('img')
    newImg.classList.add('card-img-top')
    newImg.setAttribute('src', `./img/${team[i].image}`)
    let cardBody= document.createElement('div')
    cardBody.classList.add('card-body','border','border-secondary', 'px-2')
    let nameToAdd=document.createElement('h5')
    nameToAdd.classList.add('card-title')
    nameToAdd.innerHTML=team[i].name
    let roleToAdd=document.createElement('p')
    roleToAdd.classList.add('card-text')
    roleToAdd.innerHTML=team[i].role


    row.append(newCell)
    newCell.append(newImg)
    newCell.append(cardBody)
    cardBody.append(nameToAdd)
    cardBody.append(roleToAdd)
}