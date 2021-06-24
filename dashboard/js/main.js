function  activNewevents(){
    let btn = document.querySelector(".newevent");
    let rejbtn = document.querySelector(".rejbtn");
    let ovl = document.querySelector(".new-event");

    btn.onclick = ()=>{
        ovl.classList.add("active")
    }
    rejbtn.onclick = ()=>{
        ovl.classList.remove("active")
    }
}
activNewevents()

function HideandSeeEditCont(){
    let editbtn = document.querySelector(".edit-btn")
    let editprofilecont = document.querySelector(".edit-profile")
    let cancelbtn = document.querySelector(".cancel-edit-btn");

    cancelbtn.onclick = (e)=>{
        e.preventDefault()
        editprofilecont.classList.remove("show")
        editprofilecont.classList.add("hide")
    }
    editbtn.onclick = ()=>{
        editprofilecont.classList.remove("hide")
        editprofilecont.classList.add("show")
    }
}
HideandSeeEditCont()

function logout(){
    let logoutbtn = document.querySelector(".logout-btn");

    logoutbtn.onclick = ()=>{
        window.location = "../index.html"
    }
}
logout()

// This function is called in users.html file

function multipleStep(){
    let steps = document.querySelectorAll(".steps")
    let joinbtn  = document.querySelector(".join-btn")
    let cancelbtn  = document.querySelector(".canceljoin-btn")
    let backbtn = document.querySelectorAll(".backbtn")

    let curr = 0;

    steps[0].classList.add("active")
    
    joinbtn.onclick = (e)=>{
        e.preventDefault()
        curr++;
        steps[0].classList.remove("active")
        steps[curr].classList.add("active")
    }

    cancelbtn.onclick = (e)=>{
        e.preventDefault()

        cancelbtn.innerHTML = `
            Loading <div class="spinner-border text-white spinner-border-sm"></div>
        `;
        


        setTimeout(() => {
            alert("Join Canceled")
            window.location = "users.html"
        }, 2000);
    }

    backbtn.forEach((btn)=>{
        btn.onclick = e =>{
            e.preventDefault()

            window.location = "users.html"
        }

    })
    
}

// Function is called in users.html

function joinRide(){
    let joinbtn  = document.querySelector(".joinbtn")

    joinbtn.onclick = ()=>{
        window.location = "join.html"
    }
}

function bookRide(){
    let bookbtn  = document.querySelector(".bookbtn")

   bookbtn.onclick = ()=>{
    window.location = "book.html"
    }
}