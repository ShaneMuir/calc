$(document).ready(function(){
	$(".plan-price").on("input change", function(){
		calculate();
	})
	$(".plan-term").on("input change", function(){
		calculate();
	})
	$(".extras").on("input change", function(){
		calculate();
	})
	$(".deposit").on("input change", function(){
		calculate();
	})
});

function calculate() {
	var plan_price = $(".plan-price").val();
	var term = $(".plan-term").val();
	var extras = $(".extras").val();
	var deposit = $(".deposit").val();
	plan_price = (Number(plan_price) + Number(extras));
	var years = (term/12);
	var interest = (years*0.04)+1;
	var toFixedInterest = interest.toFixed(2);
	var costIncInterest = (plan_price-deposit)*interest;
	var monthlyPayment = (costIncInterest/term);
	monthlyPayment = monthlyPayment.toFixed(2);
	var interestPayable = (Number(costIncInterest) - Number(plan_price) + Number(deposit));
	var totalPayable = (Number(plan_price) + Number(interestPayable));
	console.log(totalPayable);

	if(years <= 2) { interest = 1; };

	if(plan_price > 1) {
		$(".results").slideDown();
	} else {
		$(".results").slideUp();
	}

	if(monthlyPayment > 0) {
		$(".cost-per-month").html(monthlyPayment+" <span>Per Month</span>");
	} else {
		$(".cost-per-month").html(plan_price+" <span>Single Payment</span>");
	}

	if(term < 25) {
		interestPayable = 0;
	}

	if(interestPayable > 0 || term > 24) {
		$(".total-interest-payable").html(interestPayable.toFixed(2));
		$(".total-payable").html(totalPayable);
	} else if(interestPayable > 0 || term < 24) {
		$(".total-payable").html("0.00");	
	} else {
		$(".total-interest-payable").html("0.00");

	}
};



