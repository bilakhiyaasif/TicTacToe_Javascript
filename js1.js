alert("TicTacToe Dynamic version\nI think you Like this game\nplease Like,Comment,Follow");
alert("If you find any bug please comment i will solve that one");
alert("Before we start please fill this form\nThank you");
var p1_name;
var p11_sign;

var p2_name;
var p22_sign;
var p1_c=0;
var p2_c=0;
var p3_c=0;
var board=new Array(3);
for(var i=0;i<3;i++)
{
    board[i]=new Array(3);
}
for(var i=0;i<3;i++)
{
    for(var j=0;j<3;j++)
    {
        board[i][j]=';';
    }
}
var p1_sign;
var p2_sign;
function button_click(obj)
{
   var index=Number_conv(obj.value); 
   var i=index.split(" ")[0];
   var j=index.split(" ")[1];  
   var b_id=document.getElementById(obj.id);
   var p_b_t=document.getElementById("p_turn");
   var p1_i=document.getElementById("p1_i");
   var p2_i=document.getElementById("p2_i");
if(p_b_t.innerHTML==p1_name)
{
b_id.style.backgroundColor="green";
if(board[i][j]==';')
{
b_id.innerHTML=p1_sign;   
board[i][j]=p1_sign;
if(check_winner(p1_sign))
{
p1_c++;
document.getElementById("p1_set").innerHTML=p1_name+" "+"win "+p1_c;
alert(p1_name+" is winner");   document.getElementById("winner_set").innerHTML+="<br/>"+p1_name+" Win 1 Game.";
   var in1=confirm("Do you play again:");
   if(in1==true)
   {
      reset1();
   }
}
if(check_draw()&&(!check_winner(p1_sign)))
{
p3_c++;
document.getElementById("p3_set").innerHTML="Draw Game: "+p3_c;
alert("Game is Draw");    document.getElementById("winner_set").innerHTML+="<br/>Game is Draw";
    var in1=confirm("Do you play again:");
   if(in1==true)
   {
      reset1();
   }
}
p_b_t.innerHTML=p2_name;
}
else
{
    alert("Invalid input\nplease try again");
    b_id.style.backgroundColor="black";
}
}
else
{
b_id.style.backgroundColor="indigo";
if(board[i][j]==';')
{
b_id.innerHTML=p2_sign;   
board[i][j]=p2_sign;
if(check_winner(p2_sign))
{
p2_c++;
document.getElementById("p2_set").innerHTML=p2_name+" "+"win "+p2_c;
   alert(p2_name+" is winner");    document.getElementById("winner_set").innerHTML+="<br/>"+p2_name+" Win 1 Game.";
    var in1=confirm("Do you play again:");
   if(in1==true)
   {
      reset1();
   }
}
if(check_draw()&&(!check_winner(p2_sign)))
{
p3_c++;
document.getElementById("p3_set").innerHTML="Draw Game: "+p3_c;
   alert("game is draw");     document.getElementById("winner_set").innerHTML+="<br/>"+"Game is Draw";
    var in1=confirm("Do you play again:");
   if(in1==true)
   {
      reset1();
   }
}
p_b_t.innerHTML=p1_name;
}
else
{
    alert("invalid input please try again");
    b_id.style.backgroundColor="black";
} 
}   
}
function Number_conv(num)
{
   num=Number(num);
    switch(num)
    {
        case 1:
            return "0 0";
        case 2:
            return "0 1";
        case 3:
            return "0 2";
        case 4:
            return "1 0";
        case 5:
            return "1 1";
        case 6:
            return "1 2";
        case 7:
            return "2 0";
        case 8:
            return "2 1";
        case 9:
            return "2 2";
    }
}
function set_board()
{    
}
function check_winner(sign)
{
var i=0,j=0;
for(i=0;i<3;i++)
{
        if((board[i][j]==sign)&&(board[i][j+1]==sign)&&(board[i][j+2]==sign))
        {
            return true;
        }
}
j=0;
for(i=0;i<3;i++)
{
     if((board[j][i]==sign)&&(board[j+1][i]==sign)&&(board[j+2][i]==sign))
        {
            return true;
        }
}
 if(((board[0][0]==sign)&&(board[1][1]==sign)&&(board[2][2]==sign))|| ((board[0][2]==sign)&&(board[1][1]==sign)&&(board[2][0]==sign)))
        {
            return true;
        }
}
function check_draw()
{
    var x=0;
    for(var i=0;i<3;i++)
    {
        for(var j=0;j<3;j++)
        {
            if((board[i][j]==';'))
            {
              x=1;
              break;  
            }
        }
    }
    if(x==1)
    {
        return false;
    }
    else
    {
        return true;
    }
}
function reset1()
{
   document.getElementById('b1').innerHTML='-';
   document.getElementById('b2').innerHTML='-';
   document.getElementById('b3').innerHTML='-';
   document.getElementById('b4').innerHTML='-';
   document.getElementById('b5').innerHTML='-';
   document.getElementById('b6').innerHTML='-';
   document.getElementById('b7').innerHTML='-';
   document.getElementById('b8').innerHTML='-';
   document.getElementById('b9').innerHTML='-';   document.getElementById('b1').style.backgroundColor="black";   document.getElementById('b2').style.backgroundColor="black";   document.getElementById('b3').style.backgroundColor="black";   document.getElementById('b4').style.backgroundColor="black";   document.getElementById('b5').style.backgroundColor="black";  document.getElementById('b6').style.backgroundColor="black";   document.getElementById('b7').style.backgroundColor="black";   document.getElementById('b8').style.backgroundColor="black";   document.getElementById('b9').style.backgroundColor="black";   
   for(var i=0;i<3;i++)
    {
    for(var j=0;j<3;j++)
    {
        board[i][j]=';';
    }
 }   
}
function view_fn(a,b,c,d)
{
 var z=document.getElementById("game");
 var z2=document.getElementById("form1"); 
 if(a==''||b==''||c==''||d=='')
 {
   alert("Please fill all the Detail\nit is mondotary\nThank you");
 }
 else if(b==d||a==c)
 {
     alert("Name and Sign must be unique ");
 }
 else
 {
 z.style.display="block";
 z2.style.display="none";
p1_name=a;
p2_name=c;
p1_sign=b;
p2_sign=d; 
var turn1=document.getElementById("p_turn");
turn1.innerHTML =p1_name;
 }   
}
