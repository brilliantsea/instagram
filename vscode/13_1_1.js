document.addEventListener("DOMContentLoaded",
    function(e) {
        let keydown = document.querySelector("#keydown")
        keydown.addEventListener("keydown", 
            function(e) {
                console.log(e.key)
                if (e.key === "q") {
                    alert("this is Q!")
                }
                if (e.key === "Enter") {
                    window.open("https://www.naver.com")
                }
            }
        )

        let change = document.querySelector("#change")
        change.addEventListener("change", 
            function(e) {
                console.log(e.target.value)
            }
        )

        let input = document.querySelector("#input")
        input.addEventListener("input", 
            function(e) {
                console.log(e.target.value)
            }
        )

        let btn1 = document.querySelector("#btn1")
        btn1.addEventListener("click", 
            function(e) {
                console.log(e.target.getAttribute("type"))
                if (e.target.getAttribute("type") === "button") {
                    e.target.setAttribute("type", "text")
                    console.log(e.target.getAttribute("type"))
                }
            }
        )
        btn1.addEventListener("change", 
            function(e) {
                e.target.setAttribute("type", "button")
            }
        )

        let btn2 = document.querySelector("#btn2")
        let imgPF = document.querySelector("#imgPF")
        let img1 = "../image/hl 1.jpg"
        let img2 = "../image/hl 2.jpg"
        let img3 = "../image/profile.jpg"

        btn2.addEventListener("click",
            function(e) {
                let src = imgPF.getAttribute("src")
                if (src === img1) {
                    imgPF.setAttribute("src", img2)
                } else if (src === img2) {
                    imgPF.setAttribute("src", img3)
                } else {
                    imgPF.setAttribute("src", img1)
                }
            }
        )

        let btn3 = document.querySelector("#btn3")
        let idP = document.querySelector("#idP")

        btn3.addEventListener("click", 
            function(e) {
                idP.textContent = "JS로 입력함"
            }
        )

        let nameEditButton = document.querySelector("#nameEditButton")
        let editNameField = document.querySelector("#editNameField")
        let okButton = document.querySelector("#okButton")
        let newName = document.querySelector("#newName")
        let nameHere = document.querySelector("#nameHere")

        nameEditButton.addEventListener("click",
            function(e) {
                editNameField.style.display = "block"
                nameEditButton.style.display = "none"
            }
        )
        okButton.addEventListener("click",
            function(e) {
                nameHere.textContent = newName.value
                editNameField.style.display = "none"
                nameEditButton.style.display = "inline"
            }
        )
    }
)

function red(e) {
    console.log(e)
    e.target.style.backgroundColor = "red"
}
function blue(e) {
    e.target.style.backgroundColor = "blue"
}