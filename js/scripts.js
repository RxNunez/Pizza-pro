// U/I logic
$(document).ready(function() {
  $("#pizza").submit(function(event) {
  var inputtedsize = $("input:radio[name=size]:checked").val();
  var inputtedcrust = $("input:radio[name=crust]:checked").val();
  var inputtedsauce = $("#sauce").val();
  var inputtedtoppings = .text($("#toppings").val());

  var newPizza = new Pizza(inputtedsize, inputtedcrust, inputtedsauce, inputtedtoppings)

  // $(".firstName").text($("input#firstName").val());
  // $(".lastName").text($("input#lastName").val());
  // $(".street").text($("input#street").val());
  // $(".aptNumber").text($("input#aptNumber").val());
  // $(".city").text($("input#city").val());
  // $(".state").text($("input#state").val());
  // $(".zip").text($("input#zip").val());

  $("#receipt").show();

    event.preventDefault();
  });
});
//business logic
function Pizza(size,crust, sauce, toppings) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.toppings = toppings;

}

Pizza.prototype.price = function () {
  return 0 + this.ordersize() + this.orderCrust() + this.orderSauce() + this.orderToppings()
}

Pizza.prototype.ordersize = function () {
  if (this.crust === "small" || this.crust === "medium") {
    return 6.00
  } else {
    return 8.00
  }
}

Pizza.prototype.orderCrust = function () {
  if (this.crust === "thin" || this.crust === "regular") {
    return 2.00
  } else {
    return 3.00
  }
}

Pizza.prototype.orderSauce = function () {
  if (this.sauce === "White sauce" || this.sauce === "Red sauce") {
    return 2.00
  } else {
    return 0.50
  }
}

Pizza.prototype.orderToppings = function () {
  if (this.toppings === "") {
    return .50
  } else {
    return 2.00
  }
}
}
// user interface logic
$(document).ready(function() {
  $("form#movie-selection").submit(function(event) {
    event.preventDefault();




    $("#ticket-cost").text(newMovie.price());



  });
});
