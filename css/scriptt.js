// Heart-button
const heartButton =document.querySelectorAll(".heart-btn");
for(const button of heartButton){
    button.addEventListener("click",function(){
        const heartcount =document.getElementById("heart-count");
        let currentCount =parseInt(heartcount.innerText);
        currentCount++;
        heartcount.innerText =currentCount;
    })
}

// call-button

const callButtons =document.querySelectorAll(".call-btn");
for(const button of callButtons){
    button.addEventListener("click",function(){
        const coin = document.getElementById("coin-count");
        let currentCoin =parseInt(coin.innerText);
        
        if(currentCoin <20){
            alert("Not enough coins!");
            return;
        }
        const card =button.closest(".card");
        const serviceName =card.querySelector(".service-name").innerText;
        const serviceNumber =card.querySelector(".service-number").innerText;

        alert(`calling ${serviceName}\n${serviceNumber}`)

        currentCoin =currentCoin -20;
        coin.innerText =currentCoin;


    })
}

// copy button

const copyButtton = document.querySelectorAll(".copy-btn");
console.log(copyButtton);
for(const button of copyButtton){
    button.addEventListener("click",function(){
        const copyCount =document.getElementById("copy-count")
        let currentCopy =parseInt(copyCount.innerText);
        currentCopy++;
        copyCount.innerText =currentCopy;

        const card =button.closest(".card");
        const serviceNumber =card.querySelector(".service-number").innerText;

        navigator.clipboard.writeText(serviceNumber);



          alert("Number Copied Successfully!");
          return;
    })
}
//history-section
const historyContainer = document.getElementById("history-container");
const clearHistory = document.getElementById("clear-history");
const callButtonss = document.querySelectorAll(".call-btn");

callButtonss.forEach(function(button){
    button.addEventListener("click",function(){
        const card = button.closest(".card");

        const serviceName =
            card.querySelector(".service-name").innerText;

        const serviceNumber =
            card.querySelector(".service-number").innerText; 
        
            

        const time = new Date().toLocaleTimeString("en-us",{
            hour:"numeric",
            minute:"numeric",
            hour12:true
        });
        
        const historyItem =document.createElement("div");

        historyItem.className ="bg-[#F2F2F2] rounded-lg p-3";
        


        historyItem.innerHTML =`
        <div class ="flex justify-between">
            <div>
               <h3 class ="font-bold">
               ${serviceName}
               </h3>
               <p class ="text-gray-500">
                ${serviceNumber}
               </p>

            </div>
            
                <p class ="text-gray-500">
                ${time}
               </p>
        </div>


        `;
        historyContainer.appendChild(historyItem)


    });

    

});
clearHistory.addEventListener("click",function(){
    historyContainer.innerHTML="";

});

