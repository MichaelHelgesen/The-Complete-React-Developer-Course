import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import dotenv from "dotenv";

//require("dotenv").config({ path: ".env-test"});

dotenv.config({
    path: ".env.test"
});

Enzyme.configure({
    adapter: new Adapter()
});



