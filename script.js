var submit=document.getElementById("submit");
var leftdiv=document.getElementById("leftdiv");
var rightdivG=document.getElementById("rightdiv");
var search=document.getElementById("Search");
var newFormbut=document.getElementById("NewFORM");
////////new form
function newForm()
{
var rightdiv = document.createElement("div");
rightdiv.setAttribute("id","rightdivi");
rightdiv.setAttribute("class","rightdivi");
var h11 = document.createElement("h2");
h11.innerHTML="Welcome to Discussion Portal!";
rightdiv.appendChild(h11)
var h112 = document.createElement("h4");
rightdiv.appendChild(h112);
h112.innerHTML="Enter a subject and Question to get Answer";
var  subject = document.createElement("input");
rightdiv.appendChild( subject);
 subject.setAttribute("type","text");
 subject.setAttribute('id',"subject");
 subject.setAttribute("placeholder","subject");
var question= document.createElement("textarea");
rightdiv.appendChild(question);
question.setAttribute("placeholder","What is your Question?");
question.setAttribute('id',"Question");
question.setAttribute("class","upper");
var button= document.createElement("button");
button.innerHTML="submit"
rightdiv.appendChild(button);
button.setAttribute("id","submit");
button.setAttribute("class","button");
//submit event listener
button.addEventListener("click",function(){
  var query={subject:"",question:"",Responses:[]};
  if (subject.value==="" || question.value==="")
  {
    return
  }
  query.subject=subject.value;
  query.question=question.value;
  arrayofquery.push(query);
  createelement(query.subject,query.question,query);
  var stringform=JSON.stringify(arrayofquery)
  localStorage.setItem("arrayofquery", stringform)
  subject.value="";
  question.value="";
});
rightdivG.appendChild(rightdiv)
////////////////////////
}
newForm();
///////////////
var body=document.getElementById("body");
var arrayofquery=[];
var stringydata=localStorage.getItem("arrayofquery");
if (stringydata)
{
    var arrayofquery=JSON.parse(stringydata);
    arrayofquery.forEach(function(qquery)
    {
     createelement(qquery.subject,qquery.question,qquery);
    })
}
console.log(arrayofquery)
function display(div){

leftdiv.appendChild(div);
}
//story(3)
function createelement(S,Q,query)
{ 
  
  var div = document.createElement("div");
  div.style.borderBottom = "thick solid #0222a3"
  var h2  = document.createElement("h2");
  var h3 = document.createElement("h3");
  h2.innerHTML=`${S}`;
  h3.innerHTML=`${Q}`;
  div.appendChild(h2);
  div.appendChild(h3);
  display(div);
  ///////////////////////////////
  //object click
  div.addEventListener("click",function(){
  var divU = document.createElement("div");
  var divL =document.createElement("div");
  divL.setAttribute("class","rightdivi")
  var Questions = document.createElement("h3");
  var Response = document.createElement("div");
  var Responseh2 = document.createElement("h3");
  Response.appendChild(Responseh2);
  var h2  = document.createElement("h2");
  var h3 = document.createElement("h3");
  var AddResponse = document.createElement("h3");
  ///////REsolve
  var Resolve = document.createElement("button");
  Resolve.setAttribute("class","button")
  Resolve.innerHTML="Resolve";
  Resolve.addEventListener("click",function(){
  leftdiv.removeChild(div);
c=arrayofquery.indexOf(query);
console.log(c)
arrayofquery.splice(c,1);
var stringform=JSON.stringify(arrayofquery);
localStorage.setItem("arrayofquery", stringform);
  rightdivG.removeChild(divL);
  rightdivG.appendChild(rightdiv);
  })
  ///////////
  var SubmitSol = document.createElement("button");
  SubmitSol.setAttribute("class","button")
  SubmitSol.innerHTML="SubmitSol";
  var inputname= document.createElement("input");
  inputname.setAttribute("placeholder","Enter Name")
  var textarea= document.createElement("textarea");
  textarea.setAttribute("placeholder","Enter Your Answer");
  textarea.setAttribute("class","upper")
  var divLL =document.createElement("div");
  var Responsearray=[];
  divU.style.backgroundColor="#f9f2ec";
  divL.setAttribute("class","rightdivi");
  Questions.innerHTML="Question";
  Responseh2.innerHTML="Response";
  h2.innerHTML=`${S}`;
  h3.innerHTML=`${Q}`;
  AddResponse.innerHTML="AddResponse";
  divL.appendChild(Questions);
  divU.appendChild(h2);
  divU.appendChild(h3);
  divL.appendChild(divU);
  divLL.appendChild(Resolve);
  divLL.appendChild(Response);
  divLL.appendChild(AddResponse);
  divLL.appendChild(inputname);
  divLL.appendChild(textarea);
  divLL.appendChild(SubmitSol);
  divL.appendChild(divLL)
  ////////////////////////////////////
  function createResponse(Name,textarea,Response)
  {

    var divUR = document.createElement("div");
    var Rname  = document.createElement("h3");
    Rname.innerHTML=`${Name}`;
    var RAns = document.createElement("h3");
    RAns.innerHTML=`${textarea}`;
     divUR.appendChild(Rname);
  divUR.appendChild(RAns);
  divUR.style.backgroundColor="#f9f2ec";
  divUR.setAttribute("class","innerResponse");
  Response.appendChild(divUR);
  };
  ////////////////////////////////
  console.log(query)
    if (query.Responses.length!==0)
  {
    query.Responses.forEach(function(r){
      createResponse(r.Name,r.Answers,Response);
    })
  }
  ////////////////////////////////////
  SubmitSol.addEventListener("click",function(){
  
  var Answer={Name:"",Answers:""};
  Answer.Name=inputname.value;
  Answer.Answers=textarea.value;
  if (inputname.value==="" || textarea.value==="")
  {
    return
  }
  query.Responses.push(Answer);
  createResponse(inputname.value,textarea.value,Response);
  console.log(query.Responses)
  var stringform=JSON.stringify(arrayofquery)
  localStorage.setItem("arrayofquery", stringform)
  inputname.value="";
  textarea.value="";
});
  var rightdiv=document.getElementById("rightdivi")
  if (rightdiv)
  {
  rightdivG.removeChild(rightdiv);
  rightdivG.appendChild(divL);
  }
  else
  {
  while (rightdivG.firstChild) {
       rightdivG.removeChild(rightdivG.firstChild);
    }
   rightdivG.appendChild(divL);
  }
});
}
//////////Search
//-----------------
//new

