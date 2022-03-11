
function berth(seat,row)
{
    for(row=0;row<18;row++)
    {
    if (seat > 0 && seat < 73)
    {
        if (seat % 8 == 1 ||seat % 8 == 4)
        {
            console.log(" Your seat is: Lower Berth")
        }
        else if (seat % 8 == 2 ||seat % 8 == 5)
        {
            console.log(" Your seat is: Middle Berth")
        }
        else if(seat % 8 == 3 ||seat % 8 == 6)
        {
            console.log(" Your seat is: Upper Berth")
        }
        else if(seat % 8 == 7)
        {
            console.log(" Your seat is: Side Lower Berth")
        }
        else
        {
            console.log(" Your seat is: Side Upper Berth")
        }  
    }  
    else
    {
        System.out.println(" Invalid Seat Number")
    }
}
}
console.log(berth(54,7))
