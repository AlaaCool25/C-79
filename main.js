var student_array=[];
function submit()
{
    var n1=document.getElementById("name_of_the_student_1").value;
    var n2=document.getElementById("name_of_the_student_2").value;
    var n3=document.getElementById("name_of_the_student_3").value;
    var n4=document.getElementById("name_of_the_student_4").value;

    student_array.push(n1);
    student_array.push(n2);
    student_array.push(n3);
    student_array.push(n4);

    console.log(student_array);
    document.getElementById("display_name").innerHTML=student_array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sort()
{
    student_array.sort();
    console.log(student_array);
    document.getElementById("display_name").innerHTML=student_array;
}