var student_array=[];
function submit()
{
    var display_student_array=[];
    for (var j=1;j<=4;j++)
    {
        var n1=document.getElementById("name_of_the_student_"+j).value;
        console.log(n1);
        student_array.push(n1);
    }

    console.log(student_array);

    var length_array =student_array.length;
    console.log(length_array);

    for (var k=0;k<length_array;k++)
    {
        display_student_array.push("<h4> NAME- "+ student_array[k] + "</h4>");
        console.log(display_student_array);
    }
    console.log(display_student_array);

    document.getElementById("display_name_with_commas").innerHTML=display_student_array;
    var r_comma=display_student_array.join(" ");
    console.log(r_comma);
    document.getElementById("display_name_without_commas").innerHTML=r_comma;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sort()
{
    student_array.sort();
    console.log(student_array);
    var display_student_sort=[];
    var length_array =student_array.length;
    console.log(length_array);

    for (var k=0;k<length_array;k++)
    {
        display_student_sort.push("<h4> NAME- "+ student_array[k] + "</h4>");
        console.log(display_student_sort);
    }
    var r_comma=display_student_sort.join(" ");
    console.log(r_comma);
    document.getElementById("display_name_without_commas").innerHTML=r_comma;
    
}