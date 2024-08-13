var friendData=[
    {
        img:"Images/friend-02.jpg",
        name:"Omar Fathy",
        title:"Cloud Developer",
        para1:"30 Friends",
        para2:" 11 Projects",
        para3:" 12 Articles",
        date:"Joined 02/08/2020"
    },
    {
        img:"Images/friend-03.jpg",
        name:"Yousef Amer",
        title:"Front End Developer",
        para1:"12 Friends",
        para2:" 14 Projects",
        para3:" 10 Articles",
        date:"Joined 02/05/2022"
    },
    {
        img:"Images/friend-04.jpg",
        name:"Shady Nabil",
        title:"Back-End Developer",
        para1:" 70 Friends",
        para2:" 30 Projects",
        para3:" 22 Articles",
        date:"Joined 06/08/2023"
    },
    {
        img:"Images/friend-05.jpg",
        name:"Mohamed Ibrahim",
        title:"Algorithm Developer",
        para1:"36 Friends",
        para2:" 19 Projects",
        para3:" 18 Articles",
        date:"Joined 12/07/2020"
    },
    {
        img:"Images/friend-01.jpg",
        name:"Amr Hendawy",
        title:"Back-End Developer",
        para1:"34 Friends",
        para2:" 12 Projects",
        para3:" 22 Articles",
        date:"Joined 22/04/2020"
    },
    {
        img:"Images/friend-02.jpg",
        name:"Mahmoud Adel",
        title:"Cloud Developer",
        para1:"30 Friends",
        para2:" 11 Projects",
        para3:" 12 Articles",
        date:"Joined 02/08/2020"
    },
    {
        img:"Images/friend-03.jpg",
        name:"Ahmed Abuzaid",
        title:"Content Creator",
        para1:"80 Friends",
        para2:" 16 Projects",
        para3:" 22 Articles",
        date:"Joined 02/08/2022"
    },
    {
        img:"Images/friend-04.jpg",
        name:"Gareeb Elshiekh",
        title:"JavaScript Developer",
        para1:"33 Friends",
        para2:" 11 Projects",
        para3:" 12 Articles",
        date:"Joined 02/08/2020"
    },
    {
        img:"Images/friend-05.jpg",
        name:"Omar Fathy",
        title:"Cloud Developer",
        para1:"30 Friends",
        para2:" 11 Projects",
        para3:" 12 Articles",
        date:"Joined 02/08/2020"
    },
]
var friendParent=document.getElementsByClassName("parent-item-friend")[0];
// friendParent.style.backgroundColor="red"
friendData.forEach((item)=>{
    friendParent.innerHTML+=`<div class="friend-item p-20">
                <div class="friend-icon">
                    <i class="fa-solid fa-phone"></i>
                    <i class="fa-regular fa-envelope"></i>
                </div>
                <div class="friend-info">
                    <img src="${item.img}" alt="" class="mb-10">
                    <h2 class="f-lg">${item.name}</h2>
                    <p class="c-gray">${item.title}</p>
                </div>
                <span class="line my-20"></span>
                <ul class="friend-list">
                    <li>
                        <i class="fa-regular fa-face-smile"></i>
                        <span>${item.para1}</span>
                    </li>
                    <li>
                        <i class="fa-solid fa-code-commit"></i>
                        <span>${item.para2}</span>
                    </li>
                    <li>
                        <i class="fa-regular fa-newspaper"></i>
                        <span>${item.para3}</span>
                    </li>
                </ul>
                <span class="line my-20"></span>
                <div class="flex-between friend-foot">
                    <p class="c-gray fs-18">${item.date}</p>
                    <div class=" d-flex friend-btn">
                        <button class="btn-shape">Profile</button>
                        <button class="btn-shape bg-red">Remove</button>
                    </div>
                </div>
            </div>`
}
)