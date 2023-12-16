class FrontController {
  static login = async (req, res) => {
    try {
      res.render("login");
    } catch (error) {
      console.log(error);
    }
  };
  static about = async (req, res) => {  
    try {
      res.render("about");
    } catch (error) {
      console.log(error);
    }
  };
  static contact = async (req, res) => {
    try {
      res.render("contact");
    } catch (error) {
      console.log(error);
    }
  };
  static desbord = async (req, res) => {
    try {
      res.render("desbord");
    } catch (error) {
      console.log(error);
    }
  };
  static register = async (req, res) => {
    try {
      res.render("register");
    } catch (error) {
      console.log(error);
    }
  };
  static profile = async (req, res) => {
    try {
      res.render("profile");
    } catch (error) {
      console.log(error);
    }
  };
  static course = async (req, res) => {
    try {
      res.render("course");
    } catch (error) {
      console.log(error);
    }
  };
  static purchagepage = async (req, res) => {
    try {
      res.render("purchagepage");
    } catch (error) {
      console.log(error);
    }
  };
   static profile = async (req, res) => {
    try {
      res.render("profile");
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = FrontController;
