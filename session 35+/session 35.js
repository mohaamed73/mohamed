let appointment = {
    patient: {
      name: "Roger Curtis",
      age: 36,
      gender: "Male",
      bloodType: "O+ (Positive)",
      allergies: ["Milk", "Penicillin"],
      conditions: ["Diabetes", "Blood Disorders"],
      height: "1.78m",
      weight: "65 kg",
      id: "20898786",
      lastVisit: "25th October 2019"
    },
    vitals: {
      heartRate: "80 bpm",
      bodyTemperature: "36.5°C",
      glucose: "100 mg/dl"
    },
    testReports: [
      {img:"data:image/jpeg;base64,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", testName: "CT Scan - Full Body", date: "12th February 2020" },
      {img:"https://media.gettyimages.com/id/162833245/photo/blank-book.jpg?s=612x612&w=gi&k=20&c=SiaHLKNPsIkoSeJZ3WpVi_cP5FyK3TmFsu2qRTT-HSQ=", testName: "Creatine Kinase T", date: "12th February 2020" },
      {img:"https://images.unsplash.com/photo-1697559007191-fc311ab417ac?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWVsbG93JTIwYm9va3xlbnwwfHwwfHx8MA%3D%3D", testName: "Eye Fluorescein Test", date: "12th February 2020" }
    ],
    prescriptions: [
      { name: "Heart Diseases", startDate: "25th October 2019", duration: "3 months" },
      { name: "Skin Care", startDate: "8th August 2019", duration: "2 months" }
    ],
    doctor: {
      name: "Dr. Alex Hess"
    }
  };
  let toggleContainer = document.querySelector(".toggleContainer ")
  function move() {
    toggleContainer.classList.toggle("active")
  }  

  let pic = document.querySelector(".pic");
  let inp = document.querySelector("#inp");
  inp.style.display = "none"; 
  
  function patient() {
      let h4 = document.createElement("h4");
      h4.textContent = appointment.patient.name;
      h4.classList.add("h4")
      let p = document.createElement("p");
      p.textContent = "Age: " + appointment.patient.age;
      p.classList.add("age")
      let btn = document.createElement("button");
      btn.classList.add("upload"); 
      btn.textContent = "Upload";
      
      btn.addEventListener("click", function() {
          inp.click(); // تحفيز النقر على عنصر الإدخال بشكل غير مرئي
      });
  
      inp.addEventListener("change", function() {
          let file = inp.files[0];
          if (file) {
              let fr = new FileReader();
              fr.onload = function() {
                  let imgpatient = document.querySelector("#imgpatient");
                  if (!imgpatient) {
                      imgpatient = document.createElement("img");
                      imgpatient.id = "imgpatient";
                      pic.appendChild(imgpatient);
                  }
                  imgpatient.src = fr.result;   
              };
              fr.readAsDataURL(file);
          }
      });
  
      pic.append(h4, p, btn);
  }
  
  patient();


let info =document.querySelector(".information")
  function information() {
    let h3 =document.createElement("h3")
    h3.textContent="Information :"
    let gender = document.createElement("p")
    gender.classList.add("gender")
    gender.textContent="Gender:    "+appointment.patient.gender
    let bloodtype = document.createElement("p")
    bloodtype.classList.add("bloodtype")
    bloodtype.textContent="Blood Type: "+appointment.patient.bloodType
    let allergies = document.createElement("p")
    allergies.classList.add("allergies")
    allergies.textContent="Allergies:   "+appointment.patient.allergies
    let conditions = document.createElement("p")
    conditions.classList.add("conditions")
    conditions.textContent="Diseases:  "+appointment.patient.conditions
    let height = document.createElement("p")
    height.classList.add("height")
    height.textContent="Height:    "+appointment.patient.height
    let weight = document.createElement("p")
    weight.classList.add("weight")
    weight.textContent="weight:   "+appointment.patient.weight
    let id = document.createElement("p")
    id.classList.add("id")
    id.textContent="Patient ID: "+appointment.patient.id
    let lastVisit = document.createElement("p")
    lastVisit.classList.add("lastvisit")
    lastVisit.textContent="Last Visit: "+appointment.patient.lastVisit
    info.append(h3,gender,bloodtype,allergies,conditions,height,weight,id,lastVisit)}
  information()


  let tap1= document.querySelector(".tap1")
  function Tap1() {
    let img = document.createElement("img")
    img.classList.add("img")
    img.src="assets/download.jpeg"
    
    let p = document.createElement("p")
    img.classList.add("p")
    p.textContent="HeartRate"
    let h5 = document.createElement("h5")
    h5.classList.add("h5")
    h5.textContent=appointment.vitals.heartRate


    tap1.append(img,p,h5)
  }
  Tap1()



  let tap2= document.querySelector(".tap2")
  function Tap2() {
    let img = document.createElement("img")
    img.classList.add("img")
    img.src="assets/images.jpeg"
    
    let p = document.createElement("p")
    img.classList.add("p")
    p.textContent="bodyTemperature"
    let h5 = document.createElement("h5")
    h5.classList.add("h5")
    h5.textContent=appointment.vitals.bodyTemperature


    tap2.append(img,p,h5)
  }
  Tap2()
  
  
  let tap3= document.querySelector(".tap3")
  function Tap3() {
    let img = document.createElement("img")
    img.classList.add("img")
    img.src="assets/download (1).jpeg"
    
    let p = document.createElement("p")
    img.classList.add("p")
    p.textContent="Glucose"
    let h5 = document.createElement("h5")
    h5.classList.add("h5")
    h5.textContent=appointment.vitals.glucose


    tap3.append(img,p,h5)
  }
  Tap3()



  let testReports= document.querySelector(".testReports")

  let testh3= document.createElement("h3")
  testh3.textContent="Test Reports"
  let bigdiv= document.createElement("div")
  bigdiv.classList.add("bigdiv")
  let bigdiv3= document.createElement("div")
  bigdiv3.classList.add("bigdiv3")
  bigdiv.append(testh3)

  testReports.append(bigdiv,bigdiv3)
  appointment.testReports.forEach(test =>{
     let testdiv= document.createElement("div")
     testdiv.classList.add("testdiv")
     let testdiv2= document.createElement("div")
     testdiv2.classList.add("testdiv2")
     
     let testimg1= document.createElement("img")
     testimg1.src=test.img
     testimg1.classList.add("testimg1")
     let testname= document.createElement("h5")
     testname.textContent= test.testName
     testReports.classList.add("testname")
     let testdate= document.createElement("p")
     testdate.textContent=test.date
     testdate.classList.add("testdate")
     
     testdiv2.append(testname,testdate)
     testdiv.append(testimg1,testdiv2)
    //  let testdiv3= document.createElement("div")
    
     bigdiv3.append(testdiv)
    }
  )






  
