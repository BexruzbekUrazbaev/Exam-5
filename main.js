const btn = document.querySelector('.sumbit');
id = document.querySelector('.id');
parol = document.querySelector('.password');

const wrap = document.querySelector('.wrapper')
const addBtn = document.querySelector('.addQuestion')
const addText = document.querySelector(".questionText")


wrap.classList.add('.none')

btn.addEventListener('click', (e) => {
    e.preventDefault()


    if (id.value == "123456" && parol.value == "78900") {
        alert("siz ro'yxatdan o'tdingiz")
        addBtn.classList.toggle('.add')
    } else {
        alert('parol yoki login xato')
        addBtn.classList.toggle('.add')
    }

    id.value = ""
    parol.value = ""

})



addBtn.addEventListener("click", (e) => {
    let a = prompt("savol kiriting...");
    let create = document.createElement("p")
    let b = create.textContent = "Siz kiritgan savol: " + a;
    wrap.appendChild(create)
})