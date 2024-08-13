// start projects
var data=[
    {
        para1:"Academy Portal",
        date:"15/6/2022",
        para2:"Academy Portal Project Design And Programming",
        img1:"Images/team-01.png",
        img2:"Images/team-02.png",
        img3:"Images/team-03.png",
        img4:"display:none",
        img5:"display:none",
        label1:"Programming",
        label2:"Design",
        label3:"display:none",
        label4:"display:none",
        money:"$1800",
        color:"green-80"
    },
    {
        para1:"Chatting Application",
        date:"15/6/2022",
        para2:"Chatting Application Project Design",
        img1:"Images/team-01.png",
        img2:"Images/team-02.png",
        img3:"Images/team-03.png",
        img4:"display:none",
        img5:"display:none",
        label1:"display:none",
        label2:"Design",
        label3:"display:none",
        label4:"display:none",
        money:"$ 950",
        color:"blue-100"
    },
    {
        para1:"Ahmed Dashboard",
        date:"15/6/2022",
        para2:"Ahmed Dashboard Project Design And Programming And Hosting",
        img1:"Images/team-01.png",
        img2:"Images/team-02.png",
        img3:"Images/team-03.png",
        img4:"Images/team-04.png",
        img5:"display:none",
        label1:"Programming",
        label2:"Design",
        label3:"Hosting",
        label4:"Marketing",
        money:"$1700",
        color:"green-60"
    },
    {
        para1:"Ahmed Portal",
        date:"15/6/2022",
        para2:"Ahmed Portal Project Design And Programming",
        img1:"Images/team-01.png",
        img2:"Images/team-02.png",
        img3:"Images/team-03.png",
        img4:"display:none",
        img5:"display:none",
        label1:"Programming",
        label2:"Design",
        label3:"display:none",
        label4:"display:none",
        money:"$ 850",
        color:"green-70"
    },
    {
        para1:"Mohamed Application",
        date:"15/6/2022",
        para2:"Mohamed Application Project Design",
        img1:"Images/team-01.png",
        img2:"Images/team-02.png",
        img3:"Images/team-03.png",
        img4:"display:none",
        img5:"display:none",
        label1:"display:none",
        label2:"Design",
        label3:"display:none",
        label4:"display:none",
        money:"$ 950",
        color:"red-40"
    },
    {
        para1:"Mohamed Dashboard",
        date:"15/6/2022",
        para2:"Mohamed Dashboard Project Design And Programming And Hosting",
        img1:"Images/team-01.png",
        img2:"Images/team-02.png",
        img3:"Images/team-03.png",
        img4:"Images/team-04.png",
        img5:"display:none",
        label1:"Programming",
        label2:"Design",
        label3:"Hosting",
        label4:"Marketing",
        money:"$ 1950",
        color:"green-70"
    },
    {
        para1:"Mohamed Portal",
        date:"15/6/2022",
        para2:"Mohamed Portal Project Design And Programming",
        img1:"Images/team-01.png",
        img2:"Images/team-02.png",
        img3:"Images/team-03.png",
        img4:"display:none",
        img5:"display:none",
        label1:"Programming",
        label2:"Design",
        label3:"display:none",
        label4:"display:none",
        money:"$1650",
        color:"green-60"
    },
    {
        para1:"Ahmed Application",
        date:"15/6/2022",
        para2:"Ahmed Application Project Design",
        img1:"Images/team-01.png",
        img2:"Images/team-02.png",
        img3:"Images/team-03.png",
        img4:"display:none",
        img5:"display:none",
        label1:"display:none",
        label2:"Design",
        label3:"display:none",
        label4:"display:none",
        money:"$950",
        color:"green-90"
    }
]
var parentItem=document.getElementsByClassName("parent-item")[0]
data.forEach(item => {
    parentItem.innerHTML+=`<div class="item p-20">
                    <div class="flex-between">
                        <p>${item.para1}</p>
                        <p class="c-gray">${item.date}</p>
                    </div>
                    <p class="c-gray my-20">${item.para2}</p>
                    <div class="project-team">
                        <img src=${item.img1} alt="" style="${item.img1}">
                        <img src="${item.img2}" alt="" style="${item.img2}">
                        <img src="${item.img3}" alt="" style="${item.img3}">
                        <img src="${item.img4}" alt="" style="${item.img4}">
                        <img src="${item.img5}" alt="" style="${item.img5}">
                    </div>
                    <span class="line my-20"></span>
                    <div class="project-label">
                        <label for="" style="${item.label1}">${item.label1}</label>
                        <label for="" style="${item.label2}">${item.label2}</label>
                        <label for="" style="${item.label3}">${item.label3}</label>
                        <label for="" style="${item.label4}">${item.label4}</label>
                    </div4
                    <span4class="line my-20"></span>
                    <div 4lass="flex-between">
                        <div class="div-line ${item.color}"></div>
                        <p class="c-gray fw-bold">${item.money}</p>
                    </div>
                </div>`
});
// end project 
// start courses
// dataCourses=[
//     {
//       img1:"Images/course-02.jpg",
//       img2:"Images/team-02.png",
//       para1:"Data Structure And Algorithms",
//       para2:"Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering",
//       span1:"1150",
//       span2:"$210"
//     },
//     {
//         img1:"Images/course-03.jpg",
//         img2:"Images/team-03.png",
//         para1:"Responsive Web Design",
//         para2:"Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints",
//         span1:" 650",
//         span2:"$90"
//       },
//       {
//         img1:"Images/course-04.jpg",
//         img2:"Images/team-04.png",
//         para1:"Mastering Python",
//         para2:"Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life",
//         span1:"950",
//         span2:"$250"
//       },
//       {
//         img1:"Images/course-05.jpg",
//         img2:"Images/team-05.png",
//         para1:"Data Structure And Algorithms",
//         para2:"Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering",
//         span1:"1150",
//         span2:"$210"
//       },
//       {
//         img1:"Images/course-01.jpg",
//         img2:"Images/team-01.png",
//         para1:"PHP Examples",
//         para2:"PHP Tutorials And Examples And Practice On Web Application And Connecting With Databases",
//         span1:"850",
//         span2:"$150"
//       },
//       {
//         img1:"Images/course-02.jpg",
//         img2:"Images/team-02.png",
//         para1:"Data Structure And Algorithms",
//         para2:"Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering",
//         span1:"1150",
//         span2:"$210"
//       },
//       {
//         img1:"Images/course-03.jpg",
//         img2:"Images/team-03.png",
//         para1:"Responsive Web Design",
//         para2:"Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints",
//         span1:" 650",
//         span2:"$90"
//       },
//       {
//         img1:"Images/course-04.jpg",
//         img2:"Images/team-04.png",
//         para1:"Mastering Python",
//         para2:"Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life",
//         span1:"950",
//         span2:"$250"
//       },
//       {
//         img1:"Images/course-05.jpg",
//         img2:"Images/team-05.png",
//         para1:"Data Structure And Algorithms",
//         para2:"Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering",
//         span1:"1150",
//         span2:"$210"
//       }
// ]
//  parentItem2=document.getElementsByClassName("parent-item2")[0];
// parentItem2.style.backgroundColor="red"
// var parentItemCourse=document.getElementsByClassName("parent-course")[0];
// parentItemCourse.style.backgroundColor="red"
// dataCourses.forEach(item => {
//     parentItemCourse.innerHTML+=`<div class="item-course ">
//             <div class="img-course w-full rad-10 over-hidden p-relative">
//                 <img src="${item.img1} alt="" class="w-full ">
//                 <img src="${item.img2}" alt="">
//             </div>
//             <div class="p-20 para-course">
//                 <p class="mb-20 fw-bold">${item.para1}</p>
//                 <p class="c-gray">${item.para2}</p>
//             </div>
//             <div class=" mt-20" >
//                 <span class="line "></span>
//                 <button class="btn-shape" style="margin: -15px auto 0 auto; ">Course Info</button>
//             </div>
//             <div class="flex-between c-gray " style="padding: 0 20px 20px 20px">
//                 <p>${item.span1}</p>
//                 <p>${item.span2}</p>
//             </div>
//            </div>`
// });
// end courses