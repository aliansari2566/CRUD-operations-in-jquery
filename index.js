var count = 0;
var curid = -1;
function hideAlert() {
  $("#submitalert").hide();
  
}
function display() {
  // alert("working");
  // var fn = document.getElementById('fname').value
  var fn = $("#fname").val(); // val() srf inputs mein use hota hai $() function us to access dom/html elements is function mein . se class access hogi or # se id 

  // var ln = document.getElementById('lname').
  var ln = $("#lname").val();
  var age = $("#age").val();

  // console.log(fn,ln);
  var res = $("#result");

  count++;

  // res.append("<div>"+fn+ln+"</div>");
// ` `string litrels string k andr variable value dalne k liye use krte hain iske andr html bhi likh skte hain ` `
//
  res.append(`<tr class ="trow"  id=${count}>  
    <th scope="row">${count}</th>
    <td class="tdfn">${fn}</td>
    <td class="tdln">${ln}</td>
    <td class="tdage">${age}</td>
    <td><button type="button" value="delete" onclick="del(this)">delete</td>
    <td><button type="button" value="Update" onclick="Update(this)" data-bs-toggle="modal" data-bs-target="#exampleModal">Update</td>
            </tr>`);

            $("#submitalert").show();
            setTimeout(hideAlert,2000)

  // res.innerHTML=fn+" "+" "+ln;
  // const node = document.createElement("li");
  // const textnode = document.createTextNode("<div>"+fn+ln+"</div>");
  // node.appendChild(textnode);
  // document.getElementById("myList").appendChild(node);
  // res.appendChild(textnode);

  //     const table_body = $("#result")
  //     for (let i = 0; i < table_body.children().length; i++)
  // {
  //     const row = table_body.children().eq(i);
  //     const firstname = row.children().eq(1).text();
  //     const lastname = row.children().eq(2).text();
  //    console.log("firstname",firstname)
  //    console.log("lastname",lastname)
  // }
}
function Update(thiselement) {
  // this element us specific row to point kry ga jb update ka button click hoga 
  var tdfn = $(thiselement).parent().siblings(".tdfn").text();
  var tdln = $(thiselement).parent().siblings(".tdln").text();
  var tdage = $(thiselement).parent().siblings(".tdage").text();
  var id = $(thiselement).parent().parent().attr("id");//ye this jis element ko point kr rha hoga uske parent k parent k attribute ki id utha k laye ga 
  console.log(id);
  curid = id;
  $("#ufname").val(tdfn);
  $("#ulname").val(tdln);
  $("#uage").val(tdage);

  console.log(tdfn);
  console.log(tdln);
  console.log(tdage);
}
function change() {
  alert("working");
  
  var mfname  = $("#ufname").val();
  var mlname = $("#ulname").val();
  var mage = $("#uage").val();
console.log(curid)
  $(`#${curid}`).children(".tdfn").text(mfname)
  $(`#${curid}`).children(".tdln").text(mlname)
  $(`#${curid}`).children(".tdage").text(mage)
  
}
function del(thiscurrent) {
  alert("cha");
  
  $(thiscurrent).parent().parent().remove();
}
function find() {
  alert("working");
  var sn = $("#searchn").val();

  const table_body = $("#result");
  for (let i = 0; i < table_body.children().length; i++) {
    const row = table_body.children().eq(i);
    const firstname = row.children().eq(1).text();
    const lastname = row.children().eq(2).text();
    if (sn === firstname || sn === lastname) {
      console.log("match found", sn);
    } else {
      row.hide();

      // console.log("searched name",sn)
      // console.log("firstname",firstname)
      // console.log("lastname",lastname)
    }
  }
}
function empty() {
  const query = $("#searchn").val();
  if (query === "") {
    console.log("empty running");
    const table_body = $("#result");
    for (let i = 0; i < table_body.children().length; i++) {
      const row = table_body.children().eq(i);

      row.show();
    }
  }
}
