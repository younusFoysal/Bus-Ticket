console.log("Connected")

const seats = document.querySelectorAll('.seat_btn')
//console.log(seats)

let seatCount = 1;
let totalCost = 0;

let seatList = [];
const couponList = ["NEW15", "Couple 20"]

for (let index = 0; index < seats.length; index++){



    const seat = seats[index];
    //console.log(seat)
    seat.addEventListener('click', function (){
        //console.log(seat)

        const seatId = seat.id;
        const seatCheck = seatList.includes(seatId)
        if (seatCheck === false){

            // Only 4 seat Validation
            if (seatCount <= 4){
                //console.log("okk");

                seat.style.backgroundColor = "#1DD100"

                const seatName = seat.querySelector("P").innerText;
                // console.log(seatName)

                const seatContainer = document.getElementById('seatInfo');
                //console.log(seatContainer);
                const tr = document.createElement("tr");
                const td1 = document.createElement("td");
                const td2 = document.createElement("td");
                const td3 = document.createElement("td");
                td1.innerText = seatName;
                td2.innerText = "Economy";
                td3.innerText = "550";

                tr.appendChild(td1)
                tr.appendChild(td2)
                tr.appendChild(td3)
                seatInfo.appendChild(tr)
                document.querySelector(".badge").innerText = seatCount;

                const seatLeft = 40 - seatCount;
                document.getElementById("seatsLeft").innerText = seatLeft;

                totalCost = seatCount * 550;
                document.getElementById("totalPrice").innerText = totalCost;
                document.getElementById("grandTotal").innerText = totalCost;


                seatCount++;

                const seatId = seat.id;
                //console.log(seatId)
                seatList.push(seatId)
                console.log(seatList)


            }else {
                //console.log("over");
                alert("You have selected 4 seats. You can buy only 4 seats.")
            }


        }else {
            alert("You can\'t select a seat twice!")
        }


    })
}

// apply Coupon section

function disFun(couponElemnt){
    //discount NEW15", "Couple 20
    if (couponElemnt === "NEW15"){
        const discountPrice = totalCost * 0.15;
        return discountPrice;
    }else if (couponElemnt === "Couple 20"){
        const discountPrice = totalCost * 0.2;
        return discountPrice;
    }
}

const btn = document.getElementById("apply-btn");
btn.addEventListener("click", function (){

    const couponElemnt = document.getElementById("input-field").value;
    //console.log(couponElemnt);
    //const cuponCode = couponElemnt.split(" ").join("").toUpperCase()

    if (totalCost === 2200){
        const couponCheck = couponList.includes(couponElemnt)



        if (couponCheck === true){


            discountPrice = disFun(couponElemnt);

            // show discount
            const discountRow = document.getElementById('totaldiscount');
            //console.log(seatContainer);
            const tr = document.createElement("tr");
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            const td3 = document.createElement("td");
            td1.innerText = "Discount Price:";
            td2.innerText = "";
            td3.innerText = discountPrice;

            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            totaldiscount.appendChild(tr)
            //console.log("pppppkkkkk")

            //grand total
            const grandTotal = totalCost - discountPrice;
            document.getElementById("grandTotal").innerText = grandTotal;

            //hide apply section
            document.getElementById("couponApplyDiv").setAttribute("hidden","")


        }else {
            alert("Invalid Coupon Code!")
        }
    }else {
        alert("Select 4 seats to apply coupon.")
    }

})


// next button


const ticketSection = document.getElementById("ticketSection")
ticketSection.addEventListener("keyup", function (){
    let phoneNum = document.getElementById("phoneNum").value
    //console.log(phoneNum)
    let passengerName = document.getElementById("passengerName").value
    //console.log(passengerName)

    let HasOneSeat = seatCount > 1;
    let HasPhone = phoneNum.length > 0;
    let HasName = passengerName.length > 0;
    //console.log("remov disable")
    //console.log(HasOneSeat)
    //console.log(HasPhone)
    //console.log(HasName);

    if ( HasName === true && HasPhone === true && HasOneSeat === true){
        const nxt = document.getElementById("next").removeAttribute("disabled");
        //console.log(nxt)
        //console.log("remov disable ok")
    }
})













