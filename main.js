let allSections = document.querySelectorAll(".main_box  .right_side > div"),
firstSection = document.querySelector(".main_box  .right_side .Personal_info"),
secondSection = document.querySelector(".main_box  .right_side .Select_your_plan"),
therdSection = document.querySelector(".main_box  .right_side .Pick_add_ons"),
fourthSection = document.querySelector(".main_box  .right_side .Finishing_up"),
fifthSection = document.querySelector(".main_box  .right_side .Thank_you"),
nextButton = document.querySelector(".main_box  .right_side #right"),
spans = document.querySelectorAll(".main_box .lift_side .container .box span"),
previosButton = document.querySelector("#lift"),
ConfirmButton = document.querySelector("#right_sec"),
firstFormData = document.querySelectorAll(".main_box .right_side .Personal_info .box input"),
formTestAlarm = document.querySelectorAll(".main_box .right_side .Personal_info .box .textAndWarning span"),
secondSecBoxes = document.querySelectorAll("div[data-select='yes']"),
secondSecBoxesMain = document.querySelectorAll(".main_box .right_side .Select_your_plan .boxs_container .box"),
togileSwitch = document.querySelector(".togleSwitch #check"),
therdSecChechBoxes = document.querySelectorAll(".main_box .right_side .Pick_add_ons .check_box"),
therdSecChechInputs = document.querySelectorAll(".main_box .right_side .Pick_add_ons .check_box input"),
forthSectionMainPlan = document.querySelector(".main_box .right_side .Finishing_up .content_box .upper_box .upper_con .lift h4"),
forthSectionMainPlanPrice = document.querySelector(".main_box .right_side .Finishing_up .content_box .upper_box .upper_con .lift h4:last-child"),
fourthSectionExtraOPtionsLeft = document.querySelector(".main_box .right_side .Finishing_up .content_box .upper_box .buttom_con .extraAdds:first-child"),
fourthSectionExtraOPtionsRight = document.querySelector(".main_box .right_side .Finishing_up .content_box .upper_box .buttom_con .extraAdds:last-child"),
fourthSectionExtraMainContainer = document.querySelector(".main_box  .right_side .Finishing_up .content_box .upper_box .buttom_con"),
fourthSectionFinalDuration = document.querySelector(".main_box .right_side .Finishing_up .content_box .buttom_box h4:first-child"),
fourthSectionFinalPrice = document.querySelector(".main_box .right_side .Finishing_up .content_box .buttom_box h3");


let YearlySubscribe = document.querySelector(".togleSwitch h4:last-child"),
MonthlySubscribe = document.querySelector(".togleSwitch h4:first-child"),
yearlyPrice = document.querySelectorAll(".main_box .right_side .Select_your_plan .boxs_container .box .text_box h4:nth-child(2)"),
therdSectionDuration = document.querySelectorAll(".main_box .right_side .Pick_add_ons .check_box .right_cont h4");

let planDuration = 'Monthly';
let curentSectionsNum = 1;
let chosenPlan = [];
let chosenExtraPlan = []



nextButton.onclick = () => {
    if (curentSectionsNum !== 5){

        curentSectionsNum++
    
    handleSections(curentSectionsNum)

        getData()

    }
}

previosButton.onclick = () => {
    curentSectionsNum--

    handleSections(curentSectionsNum)

}


let reqBorder = document.querySelectorAll(".main_box .right_side .box input")
let reqtext = document.querySelectorAll(".main_box .right_side .Personal_info .box .textAndWarning h4:last-child")

let nameForm = /^[A-Za-z\s]+$/
let emailForm = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
let numberForm = /^(?:\+20|0)?1[0125][0-9]{8}$/



// function that handle next and previous sections
function handleSections(e) {

        if(e === 1){

            allSections.forEach(element => {
                element.style.display = "none";
            });

            firstSection.style.display = "block";
            previosButton.style.display = "none"
            spans.forEach(ele => {
                ele.classList = ""
                spans[e - 1].classList = "on"
            });

        } else if(e === 2){


            reqBorder.forEach(element => {
                element.classList = ""
            });

            reqtext.forEach(element => {
                element.style.display = "none"
            });

            // || firstFormData[1].value  !== "" || firstFormData[3].value !== "" 
            if(firstFormData[0].value !== "" && firstFormData[1].value  !== ""  && firstFormData[2].value !== "" ){ 

    // if(nameForm.test(firstFormData[0].value) && emailForm.test(firstFormData[1].value) && numberForm.test(firstFormData[2].value)) {
        
        allSections.forEach(element => {
            element.style.display = "none";
        });

        secondSection.style.display = "block";
        previosButton.style.display = "block"

        spans.forEach(ele => {
            ele.classList = ""
            spans[e - 1].classList = "on"
        });

    // } else {
    //     curentSectionsNum--
    // }

        } else{

                curentSectionsNum--

                if(firstFormData[0].value === ""){

                    reqBorder.forEach(element => {
                        reqBorder[0].classList.add("req")
                    });

                    reqtext.forEach(element => {
                        reqtext[0].style.display = "block"
                    });
                } 

                if(firstFormData[1].value  === ""){
                    reqBorder.forEach(element => {
                        reqBorder[1].classList.add("req")
                    });

                    reqtext.forEach(element => {
                        reqtext[1].style.display = "block"
                    });

                } 

                if( firstFormData[2].value === "" ){

                    reqBorder.forEach(element => {
                        reqBorder[2].classList.add("req")
                    });

                    reqtext.forEach(element => {
                        // element.style.display = "none"
                        reqtext[2].style.display = "block"
                    });
                }
        }

        } else if(e === 3){

            SendSecondSecData()

            fourthSectionExtraMainContainer.innerHTML = ""

                if(chosenPlan.length !== 0){

                sessionStorage.setItem("chosenplan", JSON.stringify(chosenPlan));
                sessionStorage.setItem("planDuration", JSON.stringify(planDuration));

                if(planDuration === "Monthly"){
                    // forthSectionMainPlanPrice.innerHTML = secondSecBoxes[(JSON.parse(sessionStorage.getItem('chosenplan')))[0].priceDdata].dataset.month
                    therdSecChechBoxes.forEach(element => {
                        element.setAttribute("data-price", element.dataset.month)
                    });
                } else if (planDuration === "Yearly"){
                    // forthSectionMainPlanPrice.innerHTML = secondSecBoxes[(JSON.parse(sessionStorage.getItem('chosenplan')))[0].priceDdata].dataset.year
                    therdSecChechBoxes.forEach(element => {
                        element.setAttribute("data-price", element.dataset.year)
                    });
                }
    
                therdSectionDuration.forEach(element => {
                    element.setAttribute("data-duration", planDuration)

                    switch (planDuration) {
                        case "Monthly":
                            element.innerHTML = element.dataset.month
                            break;
                        case "Yearly":
                            element.innerHTML = element.dataset.year
                            break;
                    }

                });

                allSections.forEach(element => {
                    element.style.display = "none";
                });
                therdSection.style.display = "block";
                nextButton.innerHTML = "Next Step"
    
                spans.forEach(ele => {
                    ele.classList = ""
                    spans[e - 1].classList = "on"
                });


            } else {
                document.querySelector(".main_box  .right_side .Select_your_plan .boxs_container").classList.add("boxes_container_shake")
                document.querySelectorAll(".main_box  .right_side .Select_your_plan .boxs_container .box").forEach(element => {
                    element.classList.add("box_shake")
                });
                let seconds = 0.4
                let countdown = setInterval(function () {

                if(--seconds > 1){
                    // document.querySelector(".main_box .right_side .Select_your_plan .boxs_container").classList.add("boxes_container_shake")
                    } else {
                        seconds--
                        document.querySelector(".main_box .right_side .Select_your_plan .boxs_container").classList.remove("boxes_container_shake")
                        document.querySelectorAll(".main_box  .right_side .Select_your_plan .boxs_container .box").forEach(element => {
                            element.classList.remove("box_shake")
                        });
                        clearInterval(countdown)
                    }
                }, 400);
                curentSectionsNum--
            }

        } else if(e === 4){

            getDataTwo()

            allSections.forEach(element => {
                element.style.display = "none";
            });
            fourthSection.style.display = "block";
            nextButton.innerHTML = "confirm"

            spans.forEach(ele => {
                ele.classList = ""
                spans[e - 1].classList = "on"
            });

            fourthSectionHandle()

        }  else if(e === 5){

            allSections.forEach(element => {
                element.style.display = "none";
            });
            fifthSection.style.display = "flex";
            nextButton.style.display = "none"
            previosButton.style.display = "none"
    }
}


    // on key up check
    firstFormData.forEach(element => {

        element.onkeyup = function test(e)  {

            // if target inpu in impty do this
            if(e.target.value === ""){

                if(e.target === firstFormData[0]){
                    reqBorder.forEach(element => {
                        reqBorder[0].classList.add("req")
                    });

                    reqtext.forEach(element => {
                        reqtext[0].style.display = "block"
                    });

                }

                if(e.target === firstFormData[1]){
                    reqBorder.forEach(element => {
                        reqBorder[1].classList.add("req")
                    });

                    reqtext.forEach(element => {
                        reqtext[1].style.display = "block"
                    });

                        formTestAlarm[1].style.display = "none"

                }

                if(e.target === firstFormData[2]){
                    reqBorder.forEach(element => {
                        reqBorder[2].classList.add("req")
                    });

                    reqtext.forEach(element => {
                        reqtext[2].style.display = "block"
                    });

                    formTestAlarm[2].style.display = "none"

                }

                        // if target input in not impty do this
            } else {

                        if(e.target === firstFormData[0]){
            
                            reqBorder.forEach(element => {
                                reqBorder[0].classList = ''
                            });
            
                            reqtext.forEach(element => {
                                reqtext[0].style.display = "none"
                            });
            
                                if(e.target.value !== ""){
            
                                    if(nameForm.test(e.target.value)){
                                        formTestAlarm.forEach(element => {
                                            formTestAlarm[0].style.display = "none"
                                        });
                                    } else{
                                        formTestAlarm.forEach(element => {
                                            formTestAlarm[0].style.display = "block"
                                        });
                                    }
                                }
                        }

                if(e.target === firstFormData[1]){

                    reqBorder.forEach(element => {
                        reqBorder[1].classList = ''
                    });

                    reqtext.forEach(element => {
                        reqtext[1].style.display = "none"
                    });

                    if(e.target.value !== ""){

                        if(emailForm.test(e.target.value)){
                            formTestAlarm.forEach(element => {
                                formTestAlarm[1].style.display = "none"
                            });
                        } else{
                            formTestAlarm.forEach(element => {
                                formTestAlarm[1].style.display = "block"
                            });
                        }
                    }
                }

                if(e.target === firstFormData[2]){

                    reqBorder.forEach(element => {
                        reqBorder[2].classList = ''
                    });

                    reqtext.forEach(element => {
                        reqtext[2].style.display = "none"
                    });

                    if(e.target.value !== ""){

                        if(numberForm.test(e.target.value)){
                            formTestAlarm.forEach(element => {
                                formTestAlarm[2].style.display = "none"
                            });
                        } else{
                            formTestAlarm.forEach(element => {
                                formTestAlarm[2].style.display = "block"
                            });
                        }
                    }
                }
            }
        }
    });


    function SendSecondSecData() {
        chosenPlan = []

        secondSecBoxes.forEach(element => {
            if(element.classList.contains("checked")){
                chosenPlan.push(JSON.parse(`{"plane": "${element.dataset.name}","duration": "${element.dataset.duration}","priceDdata": "${element.dataset.price}"}`))
                console.log(element)
            }
        });
    }


 // second section handle
    secondSecBoxes.forEach((element, ind) => {

        element.addEventListener('click',  function teee(e) {

            if (e.currentTarget.dataset.check === "checked"){

                e.currentTarget.setAttribute("data-check", "");
                e.currentTarget.classList.remove("checked")

            } else if (e.currentTarget.dataset.check !== "checked"){

                secondSecBoxes.forEach(element => {
                    element.setAttribute("data-check", "")
                    element.classList.remove("checked")
                    chosenPlan = []
                });

                e.currentTarget.setAttribute("data-check", "checked");
                e.currentTarget.classList.add("checked")

                chosenPlan = chosenPlan.filter(Boolean);

            }
        })
    });


 // Therd section handle
    therdSecChechBoxes.forEach(e => {

        e.onclick = e => {

            const div = new Checkbox(
                e.currentTarget.classList.value,
                e.currentTarget,
                e.currentTarget.querySelector('input')
            );
        div.divChecker();
        }
    })


    function getDataTwo(e, a){

            chosenExtraPlan = []
            therdSecChechBoxes.forEach(element => {
                if(element.classList.contains("checked")){

                    chosenExtraPlan.push(JSON.parse(`{"plane": "${element.dataset.name}", "price": "${element.dataset.price}"}`))

                }
            });
            sessionStorage.setItem("extra Adds", JSON.stringify(chosenExtraPlan));
            console.log(chosenExtraPlan)
    }


    class Checkbox  {
    
        constructor(value, div, checkbox) {
        
        this.classValue = value;
        this.parentDiv = div;
        this.checkBox = checkbox;
        }
        divChecker () {

        switch(this.classValue === this.classValue) {
            

            case (!this.classValue.includes('checked')) :
        
                this.addChecked();
        
                    break;
                
            case (this.classValue.includes('checked') ):
        
                this.removeChecked();
        
                    break;
            
        }
    }
        addChecked () {

                this.parentDiv.classList.add('checked');
                this.checkBox.checked = true;

        }
        removeChecked () {
        this.parentDiv.classList.remove('checked');
        this.checkBox.checked = false;

        // chosenExtraPlan = chosenExtraPlan.filter(obj => {
        //     // console.log(JSON.stringify(obj))
        //     // console.log(this.parentDiv.dataset.name)
        //     // console.log(`{"plane": "${this.parentDiv.dataset.name}", "price": "${this.parentDiv.dataset.price}"}`)

        //     return JSON.stringify(obj) !== `{"plane": "${this.parentDiv.dataset.name}", "price": "${this.parentDiv.dataset.price}"}`
        //     // console.log(obj)

        // });

        // console.log(chosenExtraPlan)
        }
    }


    togileSwitch.addEventListener('click', function (e) {

        let YearlySubscribeOfere = document.querySelectorAll(".main_box .right_side .Select_your_plan .boxs_container .box .text_box h4:last-child")

        if(togileSwitch.checked === true){

            // handle text
            YearlySubscribe.style.cssText = "font-weight: 600; transition: all 0.4s ease 0s; color: var(--Marine-blue);"
            MonthlySubscribe.style.color = ""
            MonthlySubscribe.style.fontweight = ""

            // handle yearly price
            YearlySubscribeOfere.forEach(element => {
                element.style.display = "block"
            });

            yearlyPrice.forEach(element => {
                element.innerHTML = element.dataset.year
            });

            secondSecBoxesMain.forEach(element => {
                element.setAttribute("data-duration", "year")
            });

            chosenPlan.forEach(element => {
                element.duration = "Year"
            });

            secondSecBoxesMain.forEach(element => {
                element.dataset.price = element.dataset.year
                // ggg(element.year)
            });


            planDuration = "Yearly"
        } else if(togileSwitch.checked === false){

            
            MonthlySubscribe.style.cssText = "font-weight: 600; transition: all 0.4s ease 0s; color: var(--Marine-blue);"
            YearlySubscribe.style.color = ""
            YearlySubscribe.style.fontweight = ""

            YearlySubscribeOfere.forEach(element => {
                element.style.display = "none"
            });
            
            yearlyPrice.forEach(element => {
                element.innerHTML = element.dataset.month
            });

            secondSecBoxesMain.forEach(element => {
                element.setAttribute("data-duration", "month")
            });

            chosenPlan.forEach(element => {
                element.duration = "Month"

            });

            secondSecBoxesMain.forEach(element => {
                element.dataset.price = element.dataset.month
            });



            planDuration = "Monthly";
            
        }
    })


    function fourthSectionHandle() {

            forthSectionMainPlan.innerHTML = `${(JSON.parse(sessionStorage.getItem('chosenplan')))[0].plane} (${(JSON.parse(sessionStorage.getItem('planDuration')))})`
            forthSectionMainPlanPrice.innerHTML = JSON.parse(sessionStorage.getItem('chosenplan'))[0].priceDdata;

        if(sessionStorage.getItem('extra Adds') !== null){

            for(let i = 0; i < JSON.parse(sessionStorage.getItem('extra Adds')).length; i++){

                let div = document.createElement("div");
                div.className = "extraAdds"
                fourthSectionExtraMainContainer.appendChild(div)

                let leftH4 = document.createElement("h4")
                let leftH4Text = document.createTextNode(JSON.parse(sessionStorage.getItem('extra Adds'))[i].plane)
                leftH4.appendChild(leftH4Text)
                div.appendChild(leftH4)

                let rightH4 = document.createElement("h4")
                let rightH4Text = document.createTextNode(JSON.parse(sessionStorage.getItem('extra Adds'))[i].price)
                rightH4.appendChild(rightH4Text)
                div.appendChild(rightH4)
            }
        }
        fourthSectionFinalDuration.innerHTML = `Total (Per ${JSON.parse(sessionStorage.getItem('chosenplan'))[0].duration})`

        let mainPlanePrice = JSON.parse(sessionStorage.getItem('chosenplan'))[0].priceDdata;
        let Extra = []
        if (sessionStorage.getItem('extra Adds') !== null){
            JSON.parse(sessionStorage.getItem('extra Adds')).forEach(element => {
                Extra.push(Number(element.price.match(/\d+/)[0]))
            });
            console.log(Extra)
        }

        let finalPrice = [(Number(mainPlanePrice.match(/\d+/)[0])), ...Extra ].reduce((total, cur) =>  total + cur)

        switch(planDuration) {
            case 'Monthly':
                fourthSectionFinalPrice.innerHTML = `+$${finalPrice}/mo`
                break;
            case 'Yearly':
                fourthSectionFinalPrice.innerHTML = `+$${finalPrice}/yr`
                break;

        }
    }


function getData() {

    if(curentSectionsNum === 2){

    firstFormData.forEach(element => {
        sessionStorage.setItem(element.dataset.name , element.value);
    });
            firstFormData[0].value = sessionStorage.getItem('Name')
            firstFormData[1].value = sessionStorage.getItem('Email')
            firstFormData[2].value = sessionStorage.getItem('Phone')
    }

    sessionStorage.setItem("chosenplan", JSON.stringify(chosenPlan));
    sessionStorage.setItem("planDuration", JSON.stringify(planDuration));

}
