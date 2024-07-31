window.onload = function () {
    let forums = document.getElementsByClassName("course");
    for (let f of forums)
        f.classList.add("wow");

    let oddForum = document.querySelectorAll(".course:nth-child(odd)");
    for (let f of oddForum)
        f.classList.add("animate__backInLeft");

    let evenForum = document.querySelectorAll(".course:nth-child(even)");
    for (let f of evenForum)
        f.classList.add("animate__backInRight");
    wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animate__animated', // default
            offset: 0,          // default
            mobile: true,       // default
            live: true        // default
        }
    )
    wow.init();
}