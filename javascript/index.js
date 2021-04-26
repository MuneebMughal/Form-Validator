const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const password2=document.getElementById("password2");

//Show Error function
function showerror(input,message)
{
  const formcontrol = input.parentElement;
  formcontrol.classList.remove('success');
  formcontrol.classList.add('error');
  const small = formcontrol.querySelector("small");
  small.innerText=message;
}
function showsuccess(input)
{
  const formcontrol = input.parentElement;
  formcontrol.classList.remove('error');
  formcontrol.classList.add('success');
}

//valid function for Email
function ValidateEmail(mail)
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
    return (true)
  }
    return (false)
}

function checkemail(input)
{
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.value))
   {
     showsuccess(input);
   }
  else {
    showerror(input,"Email not valid");
  }
}

function check(inputarr)
{
  inputarr.forEach(function(item){
    console.log(item);
  });

  inputarr.forEach(function(item)
  {
    if(item.value === '')
    {
      showerror(item,item.id+" Can Not Be Empty")
    }
    else {
      showsuccess(item)
    }
  });

}

function checklength(input,min,max)
{
  if(input.value.length < min)
  {
    showerror(input,input.id+" should be atleast "+ min +" characters long");
  }
  else if(input.value.length > max )
  {
    showerror(input,input.id+" should be less than "+ max +" characters ");
  }
}

form.addEventListener("submit",function(e)
{
  e.preventDefault();
  check([username,email,password,password2]);
  checklength(username,3,15);
  checklength(password,6,15);
  checkemail(email);

  // if(username.value === "")
  // {
  //   showerror(username,"Username Can Not Be Empty");
  //
  // }
  // else {
  //   showsuccess(username);
  // }
  // if(email.value === "")
  // {
  //   showerror(email,"email Can Not Be Empty");
  // }
  // else if (!ValidateEmail(email.value)) {
  //   showerror(email,"Email Not Valid");
  // }
  // else {
  //   showsuccess(email);
  // }
  // if(password.value === "")
  // {
  //   showerror(password,"password Can Not Be Empty");
  // }
  // else {
  //   showsuccess(password);
  // }
}
  )
