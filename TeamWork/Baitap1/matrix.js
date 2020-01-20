function IsValidNumber(num){
    num = parseInt(num);
    return !isNaN(num) && Number.isInteger(num) && num >= 10 && num <= 15;
}

function IsValidRowToTotal(row, number){
    number = parseInt(number);
    return number<=row && !isNaN(number) && Number.isInteger(number);
}

function GenerateMatrix(row, col){
    let matrix = new Array(row);
    for(let i=0; i< row; i++){
        let arr = new Array(col);
        for(let j = 0; j< col; j++){
            arr[j] = Math.floor(Math.random() * 41 + 10);
        }
        matrix[i] = arr;
    }
    return matrix;
}

function ShowMatrix(row, col, matrix){
    let str ="";
    for(let i=0; i< row; i++){
        str = str + "<tr>";
        for(let j = 0; j< col; j++){
            str = str + "<td>" + matrix[i][j] + "</td>";
        }
        str = str + "</tr>";
    }
    return str;
}

function Totalrow(matrix, inputRow){
    inputRow = parseInt(inputRow)-1;
    let total = 0;
    for(let i=0; i<matrix[inputRow].length; i++){
        total += matrix[inputRow][i];
    }
    return total;
}

function TotalMultipleOf5(row, col, matrix,num){
    let total = 0;
    for(i=0; i<row;i++){
        for(j=0;j<col;j++){
            if(matrix[i][j] %num == 0){
                total ++;
            }
        }
    }
    return total;
}

function sumBoder(arr) {
    let sumboder = 0;
    for (let i=0;i<arr.length;i++) {
        for (let j=0;j<arr[i].length;j++) {
            if (i === 0 || i === arr.length - 1) {
                sumboder += arr[i][j];
            }
            else {
                if (j === 0 || j === arr[i].length - 1) {
                    sumboder += arr[i][j];
                }
            }
        }
    }
    return sumboder;
}

function maxValue(arr){
    let max=arr[0][0];
    for (const i in arr) {
        for (const j in arr[i]) {
            if(arr[i][j]>max){
                max=arr[i][j];
            }
        }
    }
    return max;
}
function maxPosition(arr,max){ // position
    let position='';
    for (let i = 0; i<arr.length; i++) {
        for (let j = 0; j<arr[i].length; j++) {
            if(arr[i][j]===max){
                position += `Position: row: ${i+1}, col: ${j+1}<br>`;
            }
        }
    }
    return position;
}

function createArray(matrix){
    let  a= [];
    for (let i=0;i<matrix.length;i++){
        a.push(Totalrow(matrix,i+1));           
    }  
    let max = a[0];
    let tmp = 0;
    for (let i=0;i<a.length;i++) {
        if (a[i] > max ){
            max = a[i];
            tmp = i;
        }
    }
    return "row no. " + (tmp + 1);
}

function Main(){
    let row = document.getElementById("rowNum").value;
    let col = document.getElementById("colNum").value;
    let inputRow = document.getElementById("rowInput").value;
    let rowMsg = document.getElementById("spRowMessage");
    let colMsg = document.getElementById("spColMessage");
    let TotalMessRow = document.getElementById("spTotalRow");
    let validRow = IsValidNumber(row);
    let validCol = IsValidNumber(col);
    let numberRow = IsValidRowToTotal(row, inputRow);

    if(!validRow){
        rowMsg.innerText = "Invalid row value";
    }
    if(!validCol){
        colMsg.innerText = "Invalid col value";
    }
    if(!numberRow){
        TotalMessRow.innerHTML = "Invalid row value";
    }

    if(validRow && validCol && numberRow){
        let matrix = GenerateMatrix(row, col);
        document.getElementById("tbMatrix1").innerHTML = ShowMatrix(row, col, matrix);
        document.getElementById("totalRowNumber").innerHTML = Totalrow(matrix, inputRow);
        document.getElementById("TotalMultipleOf5").innerHTML = TotalMultipleOf5(row, col, matrix,5);
        document.getElementById("totalBorderMatrix").innerHTML = sumBoder(matrix);
        document.getElementById("GreatestValue").innerHTML = maxValue(matrix);
        document.getElementById("MaxValuePosition").innerHTML = maxPosition(matrix,maxValue(matrix));
        document.getElementById("TotalOfMaxvalueRow").innerHTML = createArray(matrix);
    }
}