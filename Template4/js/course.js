
dataCourses=[
    {
      img1:"Images/course-02.jpg",
      img2:"Images/team-02.png",
      para1:"Data Structure And Algorithms",
      para2:"Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering",
      span1:"1150",
      span2:"$210"
    },
    {
        img1:"Images/course-03.jpg",
        img2:"Images/team-03.png",
        para1:"Responsive Web Design",
        para2:"Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints",
        span1:" 650",
        span2:"$90"
      },
      {
        img1:"Images/course-04.jpg",
        img2:"Images/team-04.png",
        para1:"Mastering Python",
        para2:"Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life",
        span1:"950",
        span2:"$250"
      },
      {
        img1:"Images/course-05.jpg",
        img2:"Images/team-05.png",
        para1:"Data Structure And Algorithms",
        para2:"Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering",
        span1:"1150",
        span2:"$210"
      },
      {
        img1:"Images/course-01.jpg",
        img2:"Images/team-01.png",
        para1:"PHP Examples",
        para2:"PHP Tutorials And Examples And Practice On Web Application And Connecting With Databases",
        span1:"850",
        span2:"$150"
      },
      {
        img1:"Images/course-02.jpg",
        img2:"Images/team-02.png",
        para1:"Data Structure And Algorithms",
        para2:"Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering",
        span1:"1150",
        span2:"$210"
      },
      {
        img1:"Images/course-03.jpg",
        img2:"Images/team-03.png",
        para1:"Responsive Web Design",
        para2:"Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints",
        span1:" 650",
        span2:"$90"
      },
      {
        img1:"Images/course-04.jpg",
        img2:"Images/team-04.png",
        para1:"Mastering Python",
        para2:"Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life",
        span1:"950",
        span2:"$250"
      },
      {
        img1:"Images/course-05.jpg",
        img2:"Images/team-05.png",
        para1:"Data Structure And Algorithms",
        para2:"Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering",
        span1:"1150",
        span2:"$210"
      }
]
 parentItem2=document.getElementsByClassName("parent-item2")[0];
dataCourses.forEach(item => {
    parentItem2.innerHTML+=`<div class="item-course ">
            <div class="img-course w-full rad-10 over-hidden p-relative">
                <img src="${item.img1}" alt="" class="w-full ">
                <img src="${item.img2}" alt="">
            </div>
            <div class="p-20 para-course">
                <p class="mb-20 fw-bold">${item.para1}</p>
                <p class="c-gray">${item.para2}</p>
            </div>
            <div class=" mt-20" >
                <span class="line "></span>
                <button class="btn-shape" style="margin: -15px auto 0 auto; ">Course Info</button>
            </div>
            <div class="flex-between c-gray " style="padding: 0 20px 20px 20px">
                <p>${item.span1}</p>
                <p>${item.span2}</p>
            </div>
           </div>`
});