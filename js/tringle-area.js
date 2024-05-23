function calculateTriangleArea(){
    //get base
    const baseInputData=document.getElementById('base-input');
    const baseInputDataString=baseInputData.value;
    const baseInput=parseFloat(baseInputDataString);
    

    //get height
    const heightInputData=document.getElementById('height-input');
    const heightInputDataString=heightInputData.value;
    const heightInput=parseFloat(heightInputDataString);
    //calculate area
    const area=0.5*baseInput*heightInput;
    
    //area show
    const spanArea=document.getElementById('span-area');
    spanArea.innerText=area;
    addCalculateEntry('Triangle',area);
   
}
//rectengle area
function calculateRectangleArea(){
    const widthInputData=document.getElementById('width-input');
    const widthInputDataString=widthInputData.value;
    const width=parseFloat(widthInputDataString);

    //get length
    const lengthInputData=document.getElementById('length-input');
    const lengthInputDataString=lengthInputData.value;
    const length=parseFloat(lengthInputDataString);
    //calculate area
    const area=width*length;
    //show area
    const spanArea2=document.getElementById('span-area-2');
    spanArea2.innerText=area;
    addCalculateEntry('Rectangle',area);
}
//parallelogram area
function calculateParalalogramArea(){
    const baseParallelogram=getInputField('base-input-2');
    const heightParallelogram=getInputField('height-input-2');
    const area=baseParallelogram*heightParallelogram;
    setElementInnerText('span-area-3',area);
    addCalculateEntry('perallelogram',area);
    
}
//rhombus area
function calculateRhombusArea(){
    const h1=getInputField('d1-input-2');
    const h2=getInputField('d2-input-2');
    const area=0.5*h1*h2;
    console.log(area);
    setElementInnerText('span-area-4',area);
    addCalculateEntry('Rhombus',area);
}
//pentagon area
function calculatePentagonArea(){
    const p=getInputField('p-input-2');
    const b=getInputField('b-input-2');
    const area=0.5*p*b;
    setElementInnerText('span-area-5',area);
    addCalculateEntry('Pentagon',area);
}
//ellipse area
function calculateEllipseArea(){
    const a=getInputField('a-input');
    const b=getInputField('b-input');
    if(isNaN(a)||isNaN(b)){
        alert('please enter a number');
    }
    const area=3.1416*a*b;
    const areaTwoDecimal=area.toFixed(2);
    setElementInnerText('span-area-6',areaTwoDecimal);
    addCalculateEntry('Ellipse',area);
}
//reUseable function
function getInputField(fieldId){
    const inputData=document.getElementById(fieldId);
    const inputDataString=inputData.value;
    const input=parseFloat(inputDataString);
    return input;
}

function setElementInnerText(elementId,area){
    const element=document.getElementById(elementId);
    element.innerText=area;
}

//entry
function addCalculateEntry(areaType,area){
    //console.log(areaType+' '+area);
    const ellipseArea=document.getElementById('area-entry');
    const count=ellipseArea.childElementCount;
    const p=document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML=`${count+1} ${areaType} ${area} cm<sup>2</sup><button class="btn btn-sm ml-3 btn-success">convert</button>`;
   
    ellipseArea.appendChild(p);
}