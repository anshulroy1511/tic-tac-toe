let currentPlayer = "x";
let arr =Array(9).fill(null);

function checkWinner()
{
    if(
        (arr[0] !== null && arr[0] == arr[1] && arr[1]==arr[2]) ||
        (arr[3] !== null && arr[3] == arr[4] && arr[4]==arr[5]) ||
        (arr[6] !== null && arr[6] == arr[7] && arr[7]==arr[8]) ||

        (arr[0] !== null && arr[0] == arr[3] && arr[3]==arr[6]) ||
        (arr[1] !== null && arr[1] == arr[4] && arr[4]==arr[7]) ||
        (arr[2] !== null && arr[2] == arr[5] && arr[5]==arr[8]) ||

        (arr[0] !== null && arr[0] == arr[4] && arr[4]==arr[8]) ||
        (arr[2] !== null && arr[2] == arr[4] && arr[4]==arr[6]) 
    ){
        //  document.write(`winner is ${currentPlayer}`);
         alert(`Winner is ${currentPlayer}`);
        return;
    }

    if(!arr.some((e) => e ===null)){
        // document.write(`draw`);
        alert('Draw!');
        return;
    } 
}

function handleClick(el){

    const id = Number(el.id);    //repersent the id of each block eg. 0,1,2
    if(arr[id] !== null) return;
    arr[id]= currentPlayer;

    el.innerText = currentPlayer;

    checkWinner();
    currentPlayer = currentPlayer ===  "x"  ? "0" : "x";
    // if(currentPlayer==="x")
    // {
    //     currentPlayer="0";
    // }
    // else{
    //     currentPlayer="x";
    // } 
}