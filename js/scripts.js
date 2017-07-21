// U/I logic
$(document).ready(function() {
  $("#pizza").submit(function(event) {
  $("#pizza-price").empty();
  var inputtedsize = $("input:radio[name=size]:checked").val();
  var inputtedcrust = $("input:radio[name=crust]:checked").val();
  var inputtedsauce = $("#sauce").val();
  var inputtedtoppings = $("#toppings").val();

  var newPizza = new Pizza(inputtedsize, inputtedcrust, inputtedsauce, inputtedtoppings)

  $("#pizza-price").text(newPizza.price());
  // add delivery
  // $(function(results){
  // $("#result").append("<li>" + results + "</li>")

  // var inputtedfirstName = $("input#firstName").val();
  // var inputtedlastName = $("input#lastName").val();
  // var inputtedstreet = $("input#street").val();
  // var inputtedaptNumber = $("input#aptNumber").val();
  // var inputtedcity = $("input#city").val();
  // var inputtedstate = $("input#state").val();
  // var inputtedzip = $("input#zip").val();

  // $("#receipt").show();

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
  if (this.size === "small" || this.size === "medium") {
    return 6.25
  } else {
    return 8.25
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
    return 3.00
  }
}
