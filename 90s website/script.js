    // loader 
        
    var loader=document.querySelector(".preloader");
    window.addEventListener('load',()=>{
    loader.style.display="none"
})

    // Trending 
    const backBtn1 = document.querySelector(".back1");
    const nextBtn1 = document.querySelector(".next1");
    nextBtn1.addEventListener("click", () => {
        const container = document.querySelector(".exp1"); // Select the scroll container again
        container.style.scrollBehavior = "smooth";
        container.scrollLeft += 620;
    });
    backBtn1.addEventListener("click", () => {
        const container = document.querySelector(".exp1"); // Select the scroll container again
        container.style.scrollBehavior = "smooth";
        container.scrollLeft -= 620;
    });

    // Mobiles 
    const nextBtn2 = document.querySelector(".next2");
    const backBtn2 = document.querySelector(".back2");
    nextBtn2.addEventListener("click", () => {
        const container = document.querySelector(".exp2"); // Select the scroll container again
        container.style.scrollBehavior = "smooth";
        container.scrollLeft += 620;
    });

    backBtn2.addEventListener("click", () => {
        const container = document.querySelector(".exp2"); // Select the scroll container again
        container.style.scrollBehavior = "smooth";
        container.scrollLeft -= 620;
    });

    const backBtn3 = document.querySelector(".back3");
    const nextBtn3 = document.querySelector(".next3");
    nextBtn3.addEventListener("click", () => {
        const container = document.querySelector(".exp3"); // Select the scroll container again
        container.style.scrollBehavior = "smooth";
        container.scrollLeft += 620;
    });

    backBtn3.addEventListener("click", () => {
        const container = document.querySelector(".exp3"); // Select the scroll container again
        container.style.scrollBehavior = "smooth";
        container.scrollLeft -= 620;
    });

    const backBtn4 = document.querySelector(".back4");
    const nextBtn4 = document.querySelector(".next4");
    nextBtn4.addEventListener("click", () => {
        const container = document.querySelector(".exp4"); // Select the scroll container again
        container.style.scrollBehavior = "smooth";
        container.scrollLeft += 620;
    });

    backBtn4.addEventListener("click", () => {
        const container = document.querySelector(".exp4"); // Select the scroll container again
        container.style.scrollBehavior = "smooth";
        container.scrollLeft -= 620;
    });

    const backBtn5 = document.querySelector(".back5");
    const nextBtn5 = document.querySelector(".next5");
    nextBtn5.addEventListener("click", () => {
        const container = document.querySelector(".exp5"); // Select the scroll container again
        container.style.scrollBehavior = "smooth";
        container.scrollLeft += 620;
    });

    backBtn5.addEventListener("click", () => {
        const container = document.querySelector(".exp5"); // Select the scroll container again
        container.style.scrollBehavior = "smooth";
        container.scrollLeft -= 620;
    });

    const backBtn6 = document.querySelector(".back6");
    const nextBtn6 = document.querySelector(".next6");
    nextBtn6.addEventListener("click", () => {
        const container = document.querySelector(".exp6"); // Select the scroll container again
        container.style.scrollBehavior = "smooth";
        container.scrollLeft += 620;
    });

    backBtn6.addEventListener("click", () => {
        const container = document.querySelector(".exp6"); // Select the scroll container again
        container.style.scrollBehavior = "smooth";
        container.scrollLeft -= 620;
    });




    window.onscroll = function () {
        let elements = document.getElementsByClassName("goTop");
        if (document.body.scrollTop > 40/* For Safari*/ || document.documentElement.scrollTop > 40)/* For Chrome, Firefox, IE and Opera*/ {
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.display = "flex";
            }
        }
        else {
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.display = "none";
            }
        }
    };

    // To avoiding copy of code  
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        alert("Double click or inspection is not allowed")
    })

    // to prevent inspect
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.shiftKey && e.key === 'I') {
            e.preventDefault();
        }
    });


    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
        }
    });
