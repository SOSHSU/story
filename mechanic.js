const display = document.querySelector(".display")
var pic1 = "http://likea.ezvivi.com/manage/0/product/183274/17582.jpg"
var deadPic = "https://solutionsreview.com/business-process-management/files/2018/06/Is-BPM-Dead.jpg"
var survivePic = "https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg"

display.innerHTML = `<img class = "picture" src = ${pic1}>`
document.querySelector(".display").classList.toggle("pictureSize")

document.querySelector(".text").classList.toggle("textStyle")
document.querySelector(".text").innerText = "Welcome! In the summer vacation, you visited your grandparent abroad. When you were traveling back, the airplane exploded and you were the only survivor. Now, you are in the forest. You need to survive and go home."


document.querySelector("#buttonQ1-1").classList.toggle("appear")
document.querySelector("#buttonQ1-2").classList.toggle("appear")
document.querySelector("#restartB").classList.toggle("appear")

document.querySelector("#buttonQ2-1").classList.toggle("appear")
document.querySelector("#buttonQ2-2").classList.toggle("appear")
document.querySelector("#buttonQ2-3").classList.toggle("appear")

document.querySelector("#buttonQ3-1").classList.toggle("appear")
document.querySelector("#buttonQ3-2").classList.toggle("appear")
document.querySelector("#buttonQ3-3").classList.toggle("appear")

document.querySelector("#buttonQ4-1").classList.toggle("appear")
document.querySelector("#buttonQ4-2").classList.toggle("appear")
document.querySelector("#buttonQ4-3").classList.toggle("appear")

document.querySelector("#buttonQ5-1").classList.toggle("appear")
document.querySelector("#buttonQ5-2").classList.toggle("appear")

function reload()
{
    location.reload()
}

function question1()
{
    document.querySelector(".text").innerText = "After you wake up, you find out the night comes. What do you do?"
    document.querySelector("#startB").classList.toggle("appear")
    var pic2 = "https://upload.wikimedia.org/wikipedia/commons/8/8b/Night_jungle_trek-_looks_un-nerving%21_%2811464532486%29.jpg"
    display.innerHTML = `<img class = "picture" src = ${pic2}>`
    document.querySelector("#buttonQ1-1").classList.toggle("appear")
    document.querySelector("#buttonQ1-2").classList.toggle("appear")
}
function dead1()
{
    display.innerHTML = `<img class = "picture" src = ${deadPic}>`
    document.querySelector(".text").innerText = "You die. To make a fire by friction requires a few hours. Before the success, you are already eaten by other animals."
    document.querySelector("#restartB").classList.toggle("appear")
    document.querySelector("#buttonQ1-1").classList.toggle("appear")
    document.querySelector("#buttonQ1-2").classList.toggle("appear")
}

function question2()
{
    document.querySelector(".text").innerText = "After this night, you decide to move. Which direction are you going to go?"
    var pic3 = "https://blog.scienceborealis.ca/wp-content/uploads/sites/2/2017/06/forest-868715_960_720-640x410.jpeg"
    display.innerHTML = `<img class = "picture" src = ${pic3}>`
    document.querySelector("#buttonQ1-1").classList.toggle("appear")
    document.querySelector("#buttonQ1-2").classList.toggle("appear")

    document.querySelector("#buttonQ2-1").classList.toggle("appear")
    document.querySelector("#buttonQ2-2").classList.toggle("appear")
    document.querySelector("#buttonQ2-3").classList.toggle("appear")
}
function dead2()
{
    display.innerHTML = `<img class = "picture" src = ${deadPic}>`
    document.querySelector(".text").innerText = "You die. You lost in the forest."
    document.querySelector("#restartB").classList.toggle("appear")
    document.querySelector("#buttonQ2-1").classList.toggle("appear")
    document.querySelector("#buttonQ2-2").classList.toggle("appear")
    document.querySelector("#buttonQ2-3").classList.toggle("appear")
}

function question3()
{
    document.querySelector(".text").innerText = "Walking for a few hours. Suddenly, you see a bear. It is 5 meters away and it stares at you. What do you do?"
    var pic4 = "https://www.wkar.org/sites/wkar/files/201304/Small%20Bear%20growl%20Clash_1270928.jpg"
    display.innerHTML = `<img class = "picture" src = ${pic4}>`
    document.querySelector("#buttonQ2-1").classList.toggle("appear")
    document.querySelector("#buttonQ2-2").classList.toggle("appear")
    document.querySelector("#buttonQ2-3").classList.toggle("appear")

    document.querySelector("#buttonQ3-1").classList.toggle("appear")
    document.querySelector("#buttonQ3-2").classList.toggle("appear")
    document.querySelector("#buttonQ3-3").classList.toggle("appear")
}
function dead3()
{
    display.innerHTML = `<img class = "picture" src = ${deadPic}>`
    document.querySelector(".text").innerText = "You die. Your action stimulated the bear."
    document.querySelector("#restartB").classList.toggle("appear")
    document.querySelector("#buttonQ3-1").classList.toggle("appear")
    document.querySelector("#buttonQ3-2").classList.toggle("appear")
    document.querySelector("#buttonQ3-3").classList.toggle("appear")
}

function question4()
{
    document.querySelector(".text").innerText = "Fortunately, You find out some fruits to eat. However, it is snowy and sunset now. It is about -30 degrees Celsius. You see a dead horse. What do you do?"
    var pic5 = "https://m.media-amazon.com/images/I/71lHmxWsJML._AC_SL1024_.jpg"
    display.innerHTML = `<img class = "picture" src = ${pic5}>`
    document.querySelector("#buttonQ3-1").classList.toggle("appear")
    document.querySelector("#buttonQ3-2").classList.toggle("appear")
    document.querySelector("#buttonQ3-3").classList.toggle("appear")

    document.querySelector("#buttonQ4-1").classList.toggle("appear")
    document.querySelector("#buttonQ4-2").classList.toggle("appear")
    document.querySelector("#buttonQ4-3").classList.toggle("appear")
}
function dead5()
{
    display.innerHTML = `<img class = "picture" src = ${deadPic}>`
    document.querySelector(".text").innerText = "You froze to death."
    document.querySelector("#restartB").classList.toggle("appear")

    document.querySelector("#buttonQ4-1").classList.toggle("appear")
    document.querySelector("#buttonQ4-2").classList.toggle("appear")
    document.querySelector("#buttonQ4-3").classList.toggle("appear")
}

function question5()
{
    document.querySelector(".text").innerText = "After you wake up, the heat from the sun warm you up. You begin to walk. You find out some footprints. What do you do?"
    var pic6 = "https://st.depositphotos.com/3057233/4606/i/950/depositphotos_46064027-stock-photo-footprints-in-the-snow-in.jpg"
    display.innerHTML = `<img class = "picture" src = ${pic6}>`
    document.querySelector("#buttonQ4-1").classList.toggle("appear")
    document.querySelector("#buttonQ4-2").classList.toggle("appear")
    document.querySelector("#buttonQ4-3").classList.toggle("appear")

    document.querySelector("#buttonQ5-1").classList.toggle("appear")
    document.querySelector("#buttonQ5-2").classList.toggle("appear")
}

function dead6()
{
    display.innerHTML = `<img class = "picture" src = ${deadPic}>`
    document.querySelector(".text").innerText = "You decide to ignore it. After few weeks, you can't find any way home and starve to death."
    document.querySelector("#restartB").classList.toggle("appear")

    document.querySelector("#buttonQ5-1").classList.toggle("appear")
    document.querySelector("#buttonQ5-2").classList.toggle("appear")    
}
function surviveEnd()
{
    display.innerHTML = `<img class = "picture" src = ${survivePic}>`
    document.querySelector(".text").innerText = "Congratulation! You survive and finally go back to your sweet home!"
    document.querySelector("#restartB").classList.toggle("appear")

    document.querySelector("#buttonQ5-1").classList.toggle("appear")
    document.querySelector("#buttonQ5-2").classList.toggle("appear")  
}