let header=document.querySelector(".header");
let experience=document.querySelector(".experience");
let education=document.querySelector(".education");
let skills=document.querySelector(".skills");
let summary=document.querySelector(".summary");
let projects=document.querySelector(".projects");

let R_left=document.querySelector(".right_left");
let R_right=document.querySelector(".right_right");

let header_detail=document.querySelector(".header_detail");
let experience_detail=document.querySelector(".experience_detail");
let Education_detail=document.querySelector(".Education_detail");
let Skills_detail=document.querySelector(".Skills_detail");
let Summary_detail=document.querySelector(".Summary_detail");
let Project_detail=document.querySelector(".Project_detail");

let P_photo=document.querySelector(".P_photo");
let Profile_photo=document.querySelector(".Profile_photo");
let add_photo=document.querySelector(".add_photo");
let file=document.querySelector(".file");
let experience_datas=document.querySelector(".experience_datas");

console.log(typeof header_detail);
let count=0;


header.addEventListener('click',()=>{
    count=0;
    R_left.innerHTML="";
    header_detail.style.display="block";
    
    R_left.appendChild(header_detail);
    R_left.style.display="block";
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    if (mediaQuery.matches)
    {
        document.querySelector(".main_right_right").style.width="100%";
    }
    else{
        document.querySelector(".main_right_right").style.width="60%";
    }
    
});

let scr;
experience.addEventListener('click',()=>{
    count=1;
    R_left.innerHTML="";
    experience_detail.style.display="block";
    R_left.appendChild(experience_detail);
    R_left.style.display="block";
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    if (mediaQuery.matches)
    {
        document.querySelector(".main_right_right").style.width="100%";
    }
    else{
        document.querySelector(".main_right_right").style.width="60%";
    }
});
education.addEventListener('click',()=>{
    count=2;
    R_left.innerHTML="";
    Education_detail.style.display="block";
    R_left.appendChild(Education_detail);
    R_left.style.display="block";
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    if (mediaQuery.matches)
    {
        document.querySelector(".main_right_right").style.width="100%";
    }
    else{
        document.querySelector(".main_right_right").style.width="60%";
    }
});
skills.addEventListener('click',()=>{
    count=3;
    R_left.innerHTML="";
    Skills_detail.style.display="block";
    R_left.appendChild(Skills_detail);
    R_left.style.display="block";
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    if (mediaQuery.matches)
    {
        document.querySelector(".main_right_right").style.width="100%";
    }
    else{
        document.querySelector(".main_right_right").style.width="60%";
    }
});
summary.addEventListener('click',()=>{
    count=4;
    R_left.innerHTML="";
    Summary_detail.style.display="block";
    R_left.appendChild(Summary_detail);
    R_left.style.display="block";
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    if (mediaQuery.matches)
    {
        document.querySelector(".main_right_right").style.width="100%";
    }
    else{
        document.querySelector(".main_right_right").style.width="60%";
    }
});
projects.addEventListener('click',()=>{
    count=5;
    R_left.innerHTML="";
    Project_detail.style.display="block";
    R_left.appendChild(Project_detail);
    R_left.style.display="block";
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    if (mediaQuery.matches)
    {
        document.querySelector(".main_right_right").style.width="100%";
    }
    else{
        document.querySelector(".main_right_right").style.width="60%";
    }
});
let selectedFile;
file.addEventListener('input',(event)=>{
    P_photo.innerHTML='';
    Profile_photo.innerHTML="";
    // Create a FileReader object
    const reader = new FileReader();
    
    // Define onload event handler for the reader
    reader.onload = function(event) {
        // Set the src attribute of the image element to the data URL
        src = event.target.result;
        // console.log(src);
        
        Profile_photo.innerHTML+=`<img src=${src}>`;
    };
     selectedFile = event.target.files[0];
     console.log(selectedFile+"&");
    
    // Read the selected file as a data URL
    if (selectedFile) {
        reader.readAsDataURL(selectedFile);
        // count=1;
    }
    file.value='';
})
add_photo.addEventListener('click',()=>{
    file.click();
    setTimeout(()=>{
    add_photo.innerText="Change Photo";

    },3000);
})


// helper event 

// input fetch 


// contact portion 

let cityhead=document.querySelector('.cityhead');
let pin=document.querySelector('.pin');
let countryhead=document.querySelector('.countryhead');
let phone=document.querySelector('.phone');
let email=document.querySelector('.email');


document.querySelector(".headcity").addEventListener('input',(ele)=>{
    cityhead.innerHTML=`<b class="mobile_contact_bold">Address:-</b><span class="mobile_contact tablet_contact">${ele.target.value}</span>`; 
});
document.querySelector(".headcountry").addEventListener('input',(ele)=>{
    countryhead.innerHTML=`<span class="mobile_contact tablet_contact">${ele.target.value}</span>`; 
});
document.querySelector(".headpincode").addEventListener('input',(ele)=>{
    pin.innerHTML=`<span class="mobile_contact tablet_contact">${ele.target.value}</span>`; 
});
document.querySelector(".headphone").addEventListener('input',(ele)=>{
    phone.innerHTML=`<b class="mobile_contact_bold">Phone:-</b> <span class="mobile_contact tablet_contact">${ele.target.value}</span>`; 
});
document.querySelector(".heademail").addEventListener('input',(ele)=>{
    email.innerHTML=`<b class="mobile_contact_bold">Email:-</b> <span class="mobile_contact tablet_contact">${ele.target.value}</span>`; 
});

// skills portion 

let skilldata1=document.querySelector(".skilldata1");
let skilldata2=document.querySelector(".skilldata2");
let skilldata3=document.querySelector(".skilldata3");
let skilldata4=document.querySelector(".skilldata4");
let skilldata5=document.querySelector(".skilldata5");
let skilldata6=document.querySelector(".skilldata6");
let skillset=[];

document.querySelector(".skill1").addEventListener('input',(ele)=>{
    if(ele.target.value.length===0)
    {
        skilldata1.style.display="none";
    }
    else{
        skilldata1.style.display="block";
        skilldata1.innerHTML=`<li class="mobile_contacts">${ele.target.value}</li>`; 
    }
    setTimeout(() => {
        skillset.push(document.querySelector(".skill1").value);
    }, 3000);
});
document.querySelector(".skill2").addEventListener('input',(ele)=>{
    if(ele.target.value.length===0)
    {
        skilldata2.style.display="none";
    }
    else{
        skilldata2.style.display="block";
        skilldata2.innerHTML=`<li class="mobile_contacts">${ele.target.value}</li>`; 
    }
    setTimeout(() => {
        skillset.push(document.querySelector(".skill2").value);
    }, 3000);
});
document.querySelector(".skill3").addEventListener('input',(ele)=>{
    if(ele.target.value.length===0)
    {
        skilldata3.style.display="none";
    }
    else{
        skilldata3.style.display="block";
        skilldata3.innerHTML=`<li class="mobile_contacts">${ele.target.value}</li>`; 
    }
    setTimeout(() => {
        skillset.push(document.querySelector(".skill3").value);
    }, 3000);
});
document.querySelector(".skill4").addEventListener('input',(ele)=>{
    if(ele.target.value.length===0)
    {
        skilldata4.style.display="none";
    }
    else{
        skilldata4.style.display="block";
        skilldata4.innerHTML=`<li class="mobile_contacts">${ele.target.value}</li>`; 
    } 
    setTimeout(() => {
        skillset.push(document.querySelector(".skill4").value);
    }, 3000);
});
document.querySelector(".skill5").addEventListener('input',(ele)=>{
    if(ele.target.value.length===0)
    {
        skilldata5.style.display="none";
    }
    else{
        skilldata5.style.display="block";
        skilldata5.innerHTML=`<li class="mobile_contacts">${ele.target.value}</li>`; 
    }
    setTimeout(() => {
        skillset.push(document.querySelector(".skill5").value);
    }, 3000);
});
document.querySelector(".skill6").addEventListener('input',(ele)=>{
    if(ele.target.value.length===0)
    {
        skilldata6.style.display="none";
    }
    else{
        skilldata6.style.display="block";
        skilldata6.innerHTML=`<li class="mobile_contacts">${ele.target.value}</li>`; 
    }
    setTimeout(() => {
        skillset.push(document.querySelector(".skill6").value);
    }, 3000);
});

// experience portion 

let exemployer1=document.querySelector(".exemployer1");
let exjobtitle1=document.querySelector(".exjobtitle1");
let excity1=document.querySelector(".excity1");
let excountry1=document.querySelector(".excountry1");
let exstart1=document.querySelector(".exstart1");
let exend1=document.querySelector(".exend1");

document.querySelector(".employer1").addEventListener('input',(ele)=>{
    exemployer1.innerText=ele.target.value; 
});
document.querySelector(".job_title1").addEventListener('input',(ele)=>{
    exjobtitle1.innerText=ele.target.value; 
});
document.querySelector(".expcity1").addEventListener('input',(ele)=>{
    excity1.innerText=`${ele.target.value}, `; 
});
document.querySelector(".expcountry1").addEventListener('input',(ele)=>{
    excountry1.innerHTML=`${ele.target.value}<br>`; 
});
document.querySelector(".expstart1").addEventListener('input',(ele)=>{
    exstart1.innerText=`(${ele.target.value} - `; 
});
document.querySelector(".expend1").addEventListener('input',(ele)=>{
    exend1.innerText=`${ele.target.value})`; 
});

let exemployer2=document.querySelector(".exemployer2");
let exjobtitle2=document.querySelector(".exjobtitle2");
let excity2=document.querySelector(".excity2");
let excountry2=document.querySelector(".excountry2");
let exstart2=document.querySelector(".exstart2");
let exend2=document.querySelector(".exend2");

document.querySelector(".employer2").addEventListener('input',(ele)=>{
    exemployer2.innerText=ele.target.value; 
});
document.querySelector(".job_title2").addEventListener('input',(ele)=>{
    exjobtitle2.innerText=ele.target.value; 
});
document.querySelector(".expcity2").addEventListener('input',(ele)=>{
    excity2.innerText=`${ele.target.value}, `; 
});
document.querySelector(".expcountry2").addEventListener('input',(ele)=>{
    excountry2.innerHTML=`${ele.target.value}<br>`; 
});
document.querySelector(".expstart2").addEventListener('input',(ele)=>{
    exstart2.innerText=`(${ele.target.value}) - `; 
});
document.querySelector(".expend2").addEventListener('input',(ele)=>{
    exend2.innerText=`(${ele.target.value})`; 
});


// education portion 
let edstart1=document.querySelector(".edstart1");
let edend1=document.querySelector(".edend1");
let edDegree1=document.querySelector(".edDegree1");
let edschool1=document.querySelector(".edschool1");
let edpercentage1=document.querySelector(".edpercentage1");
let edcity1=document.querySelector(".edcity1");
document.querySelector(".edustart1").addEventListener('input',(ele)=>{
    edstart1.innerText=`(${ele.target.value}) - `; 
});
document.querySelector(".eduend1").addEventListener('input',(ele)=>{
    edend1.innerText=`(${ele.target.value})`; 
});
document.querySelector(".degree1").addEventListener('input',(ele)=>{
    edDegree1.innerText=`${ele.target.value}`; 
});
document.querySelector(".school1").addEventListener('input',(ele)=>{
    edschool1.innerText=`${ele.target.value} `; 
});
document.querySelector(".percentage1").addEventListener('input',(ele)=>{
    edpercentage1.innerText=`${ele.target.value}%`; 
});
document.querySelector(".educity1").addEventListener('input',(ele)=>{
    edcity1.innerText=`(${ele.target.value})`; 
});

let edstart2=document.querySelector(".edstart2");
let edend2=document.querySelector(".edend2");
let edDegree2=document.querySelector(".edDegree2");
let edschool2=document.querySelector(".edschool2");
let edpercentage2=document.querySelector(".edpercentage2");
let edcity2=document.querySelector(".edcity2");
document.querySelector(".edustart2").addEventListener('input',(ele)=>{
    edstart2.innerText=`(${ele.target.value}) - `; 
});
document.querySelector(".eduend2").addEventListener('input',(ele)=>{
    edend2.innerText=`(${ele.target.value})`; 
});
document.querySelector(".degree2").addEventListener('input',(ele)=>{
    edDegree2.innerText=`${ele.target.value}`; 
});
document.querySelector(".school2").addEventListener('input',(ele)=>{
    edschool2.innerText=`${ele.target.value} `; 
});
document.querySelector(".percentage2").addEventListener('input',(ele)=>{
    edpercentage2.innerText=`${ele.target.value}%`; 
});
document.querySelector(".educity2").addEventListener('input',(ele)=>{
    edcity2.innerText=`(${ele.target.value})`; 
});

let edstart3=document.querySelector(".edstart3");
let edend3=document.querySelector(".edend3");
let edDegree3=document.querySelector(".edDegree3");
let edschool3=document.querySelector(".edschool3");
let edpercentage3=document.querySelector(".edpercentage3");
let edcity3=document.querySelector(".edcity3");
document.querySelector(".edustart3").addEventListener('input',(ele)=>{
    edstart3.innerText=`(${ele.target.value}) - `; 
});
document.querySelector(".eduend3").addEventListener('input',(ele)=>{
    edend3.innerText=`(${ele.target.value})`; 
});
document.querySelector(".degree3").addEventListener('input',(ele)=>{
    edDegree3.innerText=`${ele.target.value}`; 
});
document.querySelector(".school3").addEventListener('input',(ele)=>{
    edschool3.innerText=`${ele.target.value} `; 
});
document.querySelector(".percentage3").addEventListener('input',(ele)=>{
    edpercentage3.innerText=`${ele.target.value}%`; 
});
document.querySelector(".educity3").addEventListener('input',(ele)=>{
    edcity3.innerText=`(${ele.target.value})`; 
});

// summary portion 

let sum_content=document.querySelector(".sum_content");
let summaryfname=document.querySelector(".summaryfname");
let summarylname=document.querySelector(".summarylname");

document.querySelector(".content_summary").addEventListener('input',(ele)=>{
    sum_content.innerHTML=`<p class="mobile_contacts">${ele.target.value}</p>`; 
});
document.querySelector(".firstname").addEventListener('input',(ele)=>{
    summaryfname.innerText=`${ele.target.value} `; 
});
document.querySelector(".lastname").addEventListener('input',(ele)=>{
    summarylname.innerText=`${ele.target.value}`; 
});

// project portion 

let projectname1=document.querySelector(".projectname1");
let projectlink1=document.querySelector(".projectlink1");
let projectdescription1=document.querySelector(".projectdescription1");

document.querySelector(".proname1").addEventListener('input',(ele)=>{
    projectname1.innerText=`${ele.target.value}`; 
});
document.querySelector(".prolink1").addEventListener('input',(ele)=>{
    projectlink1.innerHTML=`<a class="demo_anchor" href="${ele.target.value}">DEMO</a>`; 
});
document.querySelector(".prodesc1").addEventListener('input',(ele)=>{
    projectdescription1.innerText=`${ele.target.value}`; 
});
let projectname2=document.querySelector(".projectname2");
let projectlink2=document.querySelector(".projectlink2");
let projectdescription2=document.querySelector(".projectdescription2");

document.querySelector(".proname2").addEventListener('input',(ele)=>{
    projectname2.innerText=`${ele.target.value}`; 
});
document.querySelector(".prolink2").addEventListener('input',(ele)=>{
    projectlink2.innerHTML=`<a class="demo_anchor" href="${ele.target.value}">DEMO</a>`; 
});
document.querySelector(".prodesc2").addEventListener('input',(ele)=>{
    projectdescription2.innerText=`${ele.target.value}`; 
});

let projectname3=document.querySelector(".projectname3");
let projectlink3=document.querySelector(".projectlink3");
let projectdescription3=document.querySelector(".projectdescription3");

document.querySelector(".proname3").addEventListener('input',(ele)=>{
    projectname3.innerText=`${ele.target.value}`; 
});
document.querySelector(".prolink3").addEventListener('input',(ele)=>{
    projectlink3.innerHTML=`<a class="demo_anchor" href="${ele.target.value}">DEMO</a>`; 
});
document.querySelector(".prodesc3").addEventListener('input',(ele)=>{
    projectdescription3.innerText=`${ele.target.value}`; 
});

// job API 

let Jobs_recommended=document.querySelector(".Jobs_recommended");
let press=document.querySelector(".press");
press.addEventListener('click',getjobs);
function getjobs(){
    let jobs=[];
let url;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f0810dbca3mshd094a9f09e099dep17fa06jsn2aee572d9e6e',
		'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com'
	}
};
async function check(){
try {
	const response = await fetch(url, options);
	const result = await response.json();
	// console.log(result);
    jobs.push(result.jobs);
    jobs.forEach((ele)=>{
        R_left.innerHTML="";
        Jobs_recommended.style.display="block";
        R_left.style.display="block";
        document.querySelector(".main_right_left").style.width="40%";
        document.querySelector(".main_right_right").style.width="60%";
        ele.forEach((elem)=>{
            if(elem.description.length>70)
            {
                elem.description=(elem.description).slice(0,150);
            }
            elem.description=`${elem.description} <a href=${elem.jobProviders[0].url}>see more</a>`;
            let div=document.createElement("div");
            div.innerHTML=`<h2>${elem.title}</h2>
            <p>${elem.company}</p>
            <p>${elem.location}</p>
            <p>${elem.employmentType}
            <p>${elem.description}</p>
            <br>
            <a href=${elem.jobProviders[0].url}>Apply Now</a>`;
            div.style.border="2px solid black";
            div.style.padding="15px";
            div.style.margin="10px";
            div.style.borderRadius="15px";
            Jobs_recommended.appendChild(div);
            console.log(elem.company);
            console.log(elem.title);
            console.log(elem.jobProviders[0].url);
            console.log(elem.location);
            console.log(elem.employmentType);
            console.log(elem.description);
        })
        const mediaQuery = window.matchMedia('(max-width: 767px)');
        if (mediaQuery.matches)
        {
            document.querySelector(".main_right_left").style.width="100%";
            document.querySelector(".main_right_right").style.width="100%";
        }
        R_left.appendChild(Jobs_recommended);
    })
    
} catch (error) {
	console.error(error);
}
}
// console.log(skillset);
const uniqueArray = [...new Set(skillset)];
uniqueArray.forEach((ele)=>{
    console.log(ele);
    if(ele)
    {
        // console.log("done");
        url = `https://jobs-api14.p.rapidapi.com/list?query=${ele}&location=India`;
       check();
    }
})
}


let enhancement_skill=document.querySelector(".enhancement_skill");
let get_project=document.querySelector(".get_project");
get_project.addEventListener('click',enhanceskill);
function enhanceskill(){
    // enhancement_skill.innerHTML="";
    let eskill=[];
    let url;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8179e9b7f4msh26459e568c8c34dp16ba99jsnfd23b1104681',
            'X-RapidAPI-Host': 'youtube-search14.p.rapidapi.com'
        }
    };
async function check(){
try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result.items);
    eskill.push(result.items);
    eskill.forEach((ele)=>{
        R_left.innerHTML="";
        enhancement_skill.style.display="block";
        R_left.style.display="block";
        document.querySelector(".main_right_left").style.width="40%";
        document.querySelector(".main_right_right").style.width="60%";
        for(let i=0;i<3;i++)
        {
            let div=document.createElement("div");
            div.innerHTML=`<a style="display:inline-block; width:100%; overflow:hidden;" href=${ele[i].url}>${ele[i].url}</a>`;
            div.style.margin="11px";
            // div.style.height="30px";
            div.style.width="100%";
            enhancement_skill.appendChild(div);
        }
        const mediaQuery = window.matchMedia('(max-width: 767px)');
        if (mediaQuery.matches)
        {
            document.querySelector(".main_right_left").style.width="100%";
            document.querySelector(".right_left").style.width="94%";
            document.querySelector(".main_right_right").style.width="100%";
        }
        R_left.appendChild(enhancement_skill);
    })
    
} catch (error) {
	console.error(error);
    console.log("hello world!");
}
}
// console.log(skillset);
const uniqueArray = [...new Set(skillset)];
uniqueArray.forEach((ele)=>{
    // console.log(ele);
    if(ele)
    {
        // console.log("done");
        url = `https://youtube-search14.p.rapidapi.com/search?q=${ele}projects&c=continuation_token`;
       check();
    }
})
}

// download pdf 

const printPdf = document.querySelector("#downloadbtn");

printPdf.addEventListener("click", ()=>{
    const element = document.querySelector('.right_right');
    element.style.width="100%";
    element.style.margin="0 auto";
html2pdf(element, {
    margin: 10,
    filename: "resume.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  });
//   element.style.width="60%";
setTimeout(() => {
    
    arrangewidth();
}, 2000);

  console.log("hello");
});
function arrangewidth(){
    const element = document.querySelector('.right_right');
    element.style.width="100%";
}
// print pdf 
document.getElementById('printbtn').addEventListener('click', function() {
    window.print();
  });
  

// Get references to the left and right divs
// const leftDiv = document.querySelector('.rrleft');
// const rightDiv = document.querySelector('.rrright');

// // Function to synchronize the height of the divs
// function syncDivHeights() {
//     console.log(rightDiv.clientHeight);
//   const rightHeight = rightDiv.clientHeight;
//   leftDiv.style.height = rightHeight + 'px';
// }

// // Example: Increase the height of the left div
// // rightDiv.style.minHeight = '20%';

// // Call the function to synchronize the height after modifying the left div
// syncDivHeights();


// let displaynext=[{header_detail},{experience_detail},{Education_detail}];
function movenext(){
    count++;
    turn();
}
function moveprev(){
    count--;
    turn();
}
function turn(){

R_left.innerHTML="";
if(count==0)
{
    
    header_detail.style.display="block";
    R_left.appendChild(header_detail);
}
if(count==1)
{
    header.style.color="white";
    header.style.backgroundColor="green";
    experience_detail.style.display="block";
    R_left.appendChild(experience_detail);
}
if(count==2)
{
    experience.style.color="white";
    experience.style.backgroundColor="green";
    Education_detail.style.display="block";
    R_left.appendChild(Education_detail);
}
if(count==3)
{
    education.style.color="white";
    education.style.backgroundColor="green";
    Skills_detail.style.display="block";
    R_left.appendChild(Skills_detail);
}
if(count==4)
{
    skills.style.color="white";
    skills.style.backgroundColor="green";
    Summary_detail.style.display="block";
    R_left.appendChild(Summary_detail);
}
if(count==5)
{
    summary.style.color="white";
    summary.style.backgroundColor="green";
    Project_detail.style.display="block";
    R_left.appendChild(Project_detail);
}
if(count==6)
{
    R_left.innerHTML="Click finalise to preview the resume";
    projects.style.color="white";
    projects.style.backgroundColor="green";
}
}
document.querySelector(".preview").addEventListener('click',()=>{
    R_left.style.display="none";
    
        document.querySelector(".main_right_right").style.width="100%";
        document.querySelector(".main_right_right").style.margin="0 auto";
   
    // R_right.style.backgroundColor="red";
})