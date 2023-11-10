//1.For a given JSON object iterate all for loops(for,for of,forin, forEach)

//using for loop:
var jsonObject = [
    {name: 'shanmathi',place:'Erode',Qualification:'BE'},
    {name:'suganya',place:'coimbatore',Qualification:'BE'}
];
console.log("This result is displayed using For loop,");
for (let i=0;i<jsonObject.length;i++){
console.log(
`Name: ${jsonObject[i].name} 
Place: ${jsonObject[i].place} 
Qualification: ${jsonObject[i].Qualification}`);
}

//using for of loop:
var jsonObject1 = [
    {name: 'shanmathi',place:'Erode',Qualification:'BE'},
    {name:'suganya',place: 'coimbatore',Qualification:'BE'}
];
console.log("This result is displayed using For of loop,");
for (let item of jsonObject1){
    console.log(`Name : ${item.name} 
Place : ${item.place}
Qualification: ${item.Qualification}`);
}

//Using for in loop
var jsonObject3 = [
    {name: 'shanmathi',place:'Erode',Qualification:'BE'},
    {name:'suganya',place: 'coimbatore',Qualification:'BE'}
];
console.log("This result is displayed using For in loop,");
for (let key in jsonObject3){
    if (jsonObject3.hasOwnProperty(key)){
        let item = jsonObject3[key]
console.log(`Name  :${item.name} 
Place :${item.place}
Qualification :${item.Qualification}`);
    }
    
}
//using for each loop:
var jsonObject4 = [
    {name: 'shanmathi',place:'Erode',Qualification:'BE'},
    {name:'suganya',place: 'coimbatore',Qualification:'BE'}
];
console.log("This result is displayed using For each loop,");
jsonObject4.forEach((item)=>{
console.log(`Name  :${item.name} 
Place :${item.place}
Qualification :${item.Qualification}`); 
});


//2.Resume in JSON

 const resume={
 Name:"Shanmathi J.L",
 email:"jl.shanmathi@gmail.com",
 phoneNumber:"8012026658",
 Education:[
    {Course:"SSLC",school:"SRC Matriculation",passedout:"2009"},
    {Course:"HSC",school:"KG Matriculation",passedout:"2011"},
    {Course:"BE",school:"Adithya Institute of Technology",passedout:"2015"}
    ],
Experience:[
    {company:"HRH pvt ltd",position:"CSA",Duration:"1 year"}],
    Hobbies:[
    "Reading books","Travelling","Cooking"],
    };

console.log("Resume in object format:-",resume);
const jsonString = JSON.stringify(resume);
console.log("Resume in string format:-",jsonString);

console.log("Resume object details are as follows:")
 console.log(`Name :${resume.Name},
 Email :${resume.email},
 Phone Number :${resume.phoneNumber}`)
 console.log("Education Details:")
 resume.Education.forEach((edu)=>{
console.log(`Course :${edu.Course},
 School :${edu.school},
 Passed Out Year :${edu.passedout}`)
 })
 console.log("Work Experience:")
 resume.Experience.forEach((exp)=>{
 console.log(`Company :${exp.company},
 Position :${exp.position},
 Duration :${exp.Duration}`)
 })
 console.log("Hobbies:")
 resume.Hobbies.forEach(hob=>{
     console.log(`${hob}`)
     })
