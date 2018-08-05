// esercizio 1 
function somma_fino_a(numero)
{
    var box = 0;
    for(var n = 1; n < numero; n++)
    {
        box += n;
    }
    return box;
}

console.log(somma_fino_a(15))

// esercizio 1bis
var k = 25;
var j = 15;
var h = 5;

function media(a,b,c)
{
    var x = a + b + c;
    var y = x / 3;
    return y
}

console.log(media(k,j,h))


// esercizio 1tris
/*
var k = 3;
var j = 5;
var h = 100;

function stampa_tra(a,b,c)
{
    for(var n = a; n < c; n += a)
    {
        console.log(n);
    }
    for(var n = b; n < c; n += b)
    {
        console.log(n);
    }
    return 
}

stampa_tra(k,j,h)
*/

/*
//esercio 1tris.1 ----> ||
var k = 3;
var j = 5;
var h = 100;

function stampa_tra(a,b,c)
{
    for(var n = 1; n < c; n += 1)
    {
        if (n % a == 0 || n % b == 0)
        {
            console.log(n)
        }
    }
    return
}

stampa_tra(k,j,h)
*/

//esercio 1tris.2 ----> &&
var k = 3;
var j = 5;
var h = 100;

function stampa_tra(a,b,c)
{
    for(var n = 1; n < c; n += 1)
    {
        if (n % a == 0 && n % b == 0)
        {
            console.log(n)
        }
    }
    return
}

stampa_tra(k,j,h)
