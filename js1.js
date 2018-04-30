var p1_name=prompt("enter player-1 Name:");
var p11_sign=prompt(p1_name+" Please Enter your sign:");

var p2_name=prompt("enter player-2 Name:");
var p22_sign=prompt(p2_name+" Please Enter your sign:");

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

//p_t_b.innerHTML="player-1 turn";
var p1_sign=p11_sign;
var p2_sign=p22_sign;






function button_click(obj)
{
   var index=Number_conv(obj.value); 
   //alert(index);
   
   var i=index.split(" ")[0];
   var j=index.split(" ")[1];
   

   
   var b_id=document.getElementById(obj.id);
   var p_b_t=document.getElementById("p_turn");
   var p1_i=document.getElementById("p1_i");
   var p2_i=document.getElementById("p2_i");
  

   
  // p1_i.innerHTML=p1_sign;
  // p2_i.innerHTML=p2_sign;
   
if(p_b_t.innerHTML=="player-1")
{
if(board[i][j]==';')
{
b_id.innerHTML=p1_sign;   
board[i][j]=p1_sign;

if(check_winner(p1_sign))
{
   alert(p1_name+" is winner");
   document.getElementById("winner_set").innerHTML+="<br/>"+p1_name+" Win 1 Game.";
   var in1=confirm("Do you play again:");
   if(in1==true)
   {
      reset1();
   }
}
if(check_draw()&&(!check_winner(p1_sign)))
{
   alert("Game is Draw");
    document.getElementById("winner_set").innerHTML+="<br/>Game is Draw";
    var in1=confirm("Do you play again:");
   if(in1==true)
   {
      reset1();
   }
}

p_b_t.innerHTML="player-2";
}
else
{
    alert("Invalid input\nplease try again");
}
}
else
{

if(board[i][j]==';')
{
b_id.innerHTML=p2_sign;   
board[i][j]=p2_sign;

if(check_winner(p2_sign))
{
   alert(p2_name+" is winner");
    document.getElementById("winner_set").innerHTML+="<br/>"+p2_name+" Win 1 Game.";
    var in1=confirm("Do you play again:");
   if(in1==true)
   {
      reset1();
   }
}

if(check_draw()&&(!check_winner(p2_sign)))
{
   alert("game is draw"); 
    document.getElementById("winner_set").innerHTML+="<br/>"+"Game is Draw";
    var in1=confirm("Do you play again:");
   if(in1==true)
   {
      reset1();
   }
}



p_b_t.innerHTML="player-1";
}
else
{
    alert("invalid input please try again");
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

   document.getElementById('b1').innerHTML='1';
   document.getElementById('b2').innerHTML='2';
   document.getElementById('b3').innerHTML='3';
   document.getElementById('b4').innerHTML='4';
   document.getElementById('b5').innerHTML='5';
   document.getElementById('b6').innerHTML='6';
   document.getElementById('b7').innerHTML='7';
   document.getElementById('b8').innerHTML='8';
   document.getElementById('b9').innerHTML='9';
   
   for(var i=0;i<3;i++)
    {
    for(var j=0;j<3;j++)
    {
        board[i][j]=';';
    }
    }

   
   
   
}