function Human (firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.getFullName = function() {
    var fname = this.firstname + this.lastname;
    return  fname;
  }
}
var John new Hurnan("John", "Doe"); 
var Ivan new Hurnan("Ivan", "Ivanov");
