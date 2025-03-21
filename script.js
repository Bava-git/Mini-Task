// take control of the outputContainer
let outputContainer = document.getElementById("outputContainer");

// Question-01 output
document.getElementById("Question01").addEventListener("click", function () {
    outputContainer.innerHTML = "";
    // below code will be displayed in the outputContainer
    outputContainer.innerHTML = `
        <div>
        <h2>Question-01, Fix the bugs in below snippet</h2>
            <div class="incorrectCode">
            <pre>
            <code>
                &lt;html lang=&quot;en&quot;&gt;
                    &lt;head&gt;
                        &lt;title&gt;Document
                            &lt;body&gt;
                                guvi
                        &lt;/title&gt;
                    &lt;/head&gt;
                    &lt;div&gt;
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        &lt;div&gt;
                            &lt;div&gt;
                                Guvi Geek Network
                            &lt;/div&gt;
                        &lt;/body&gt;
                &lt;/html&gt;
            </code>
            </pre>
            </div>
            
            <h2>Deployed code</h2>
            <div class="coorectedCode">
                <div>
                    <p>guvi</p>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div>
                            <p>Guvi Geek Network</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
});

// Question-02 output
document.getElementById("Question02").addEventListener("click", function () {
    outputContainer.innerHTML = "";
    // below code will be displayed in the outputContainer
    outputContainer.innerHTML = `
        <div>

            <h2>Question-02, Try the below one</h2>
            <div class="incorrectCode">
            <pre>
            <code>
                &lt;html lang=&quot;en&quot;&gt;
                    &lt;head&gt;
                        &lt;title&gt;Document
                            &lt;body&gt;
                                guvi
                    &lt;/head&gt;
                    &lt;div&gt;
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        &lt;div&gt;
                            &lt;div&gt;
                                Guvi Geek Network
                            &lt;/div&gt;
                        &lt;/body&gt;
                    &lt;/html&gt;
            </code>
            </pre>
            </div>
            
            <h2>Deployed code</h2>
            <div class="coorectedCode">
                <div>
                    <p>guvi</p>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div>
                            <p>Guvi Geek Network</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    `;
});

// Question-03 output
document.getElementById("Question03").addEventListener("click", function () {
    outputContainer.innerHTML = "";
    Quastion03Insertor();
});

function Quastion03Insertor() {
    // below code will be displayed in the outputContainer
    outputContainer.innerHTML = `
        <div>
            <h2>Question-03, Design a contact us form with all fields as required.</h2>
            <div class="Container">
                <h1 class="title">Contact us</h1>
                <form>
                    <label for="name">Name:</label>
                    <input type="text" class="name" id="name" name="name" autocomplete="name" required>
                    <br><br>
                    <label for="email">Email:</label>
                    <input type="email" class="email" id="email" name="email" autocomplete="email" required>
                    <br><br>
                    <label for="phonenumber">Phone:</label>
                    <input type="tel" class="phonenumber" id="phonenumber" name="phonenumber" autocomplete="mobile" required>
                    <br><br>
                    <label for="message">Message:</label>
                    <br>
                    <textarea class="message" name="message" id="message" required></textarea>
                    <br><br>
                    <div class="SubmitButtonContainer">
                        <button class="SubmitButton" onclick="ContactsubmitButton();">Submit</button>
                    </div>
                </form>
            </div>
        </div>
            `;
}

// After sumbit button is clicked in the contact us form
function ContactsubmitButton() {
    Quastion03Insertor();
    // alert message
    alert("Thank you for contacting us. We will get back to you soon.");
}

// Question-04 output
document.getElementById("Question04").addEventListener("click", function () {
    outputContainer.innerHTML = "";
    // below code will be displayed in the outputContainer
    outputContainer.innerHTML = `
    <div>
        <h2>Question-04, Use certain HTML elements to display the following in a HTML page.</h2>
            <ul>
    <li>Programming Language</li>
    <ul>
        <li>JavaScript</li>
        <ol>
            <li type="a">Angular</li>
            <li type="a">React</li>
            <li type="a">Vue.js</li>
        </ol>
        <li>Python</li>
        <ol>
            <li type="a">Django Framework</li>
            <li type="a">Flask Framework</li>
        </ol>
        <li>Java</li>
        <ol>
            <li type="a">Spring</li>
            <li type="a">Maven</li>
            <li type="a">Hibernate</li>
        </ol>
    </ul>
    <li>Database</li>
    <ul>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>Cansandra</li>
    </ul>
</ul>
    </div>
    `;
});

// Question-05 output
document.getElementById("Question05").addEventListener("click", function () {
    outputContainer.innerHTML = "";
    // below code will be displayed in the outputContainer
    outputContainer.innerHTML = `
    <div>
        <h2>Question-05, Create an element that helps you to open the https://google.com in separate new tab.</h2>
        <button onclick="window.open('https://google.com', '_blank')">Open Google</button>
    </div>
    `;
});

// Question-06 output
document.getElementById("Question06").addEventListener("click", function () {
    outputContainer.innerHTML = "";
    Quastion06Insertor();
});

// below code will be displayed in the outputContainer
function Quastion06Insertor() {
    outputContainer.innerHTML = `
    <div>
    <h2>Question-06, In the form, add two radio buttons with grouping them for employee type(Salaried and own business)</h2>
    <div class="Container">
        <h1 class="title">New Employee details</h1>
        <form>
            <label for="name">Name:</label>
            <input type="text" class="name" id="name" name="name" autocomplete="name" required>
            <br><br>
            <label for="age">Age:</label>
            <input type="number" class="age" id="age" name="age" autocomplete="age" required>
            <br><br>
            <label for="email">Email:</label>
            <input type="email" class="email" id="email" name="email" autocomplete="email" required>
            <br><br>
            <label for="phonenumber">Phone:</label>
            <input type="tel" class="phonenumber" id="phonenumber" name="phonenumber" autocomplete="mobile" required>
            <br><br>
            <label for="SalariedemployeeType">Employee Type:</label>
            <input type="radio" class="employeeType" id="SalariedemployeeType" name="employeeType" value="Salaried" required>
            <label for="SalariedemployeeType">Salaried</label>
            <input type="radio" class="employeeType" id="OwnBusinessemployeeType" name="employeeType" value="Own Business" required>
            <label for="OwnBusinessemployeeType">Own Business</label>
            <br><br>
            <div class="SubmitButtonContainer">
                <button class="SubmitButton" onclick="EmployeesubmitButton();">Submit</button>
            </div>
        </form>
    </div>
    </div>
    `;
};


// After sumbit button is clicked in the Employee form
function EmployeesubmitButton() {
    Quastion06Insertor();
    // alert message
    alert("Employee details are updated, We will get back to you soon.");
}

// Question-07 output
document.getElementById("Question07").addEventListener("click", function () {
    outputContainer.innerHTML = "";
    // below code will be displayed in the outputContainer
    outputContainer.innerHTML = `
    <h2>Question-07, Design form shown in the link (http://evc-cit.info/cit040/formguide/card_0.png)</h2>
    <div class="Container">
        <h1 class="aadhartitle">New Aadhar card</h1>
        <form>
            <div class="SubContainer">
                <label for="name">Name:</label>
                <input type="text" class="name" id="name" name="name" autocomplete="name" required>
            </div>
            <br><br>
            <div class="SubContainer">
                <div>
                    <label for="guardian">Guardian:</label>
                    <input type="radio" class="SonOf" id="SonOf" name="guardian" value="SonOf" required>
                    <label for="SonOf">S/o</label>
                    <input type="radio" class="DaughterOf" id="DaughterOf" name="guardian" value="DaughterOf"
                        required>
                        <label for="DaughterOf">D/o</label>
                    <input type="radio" class="WifeOf" id="WifeOf" name="guardian" value="WifeOf" required>
                    <label for="WifeOf">W/o</label>
                    <input type="radio" class="CareOf" id="CareOf" name="guardian" value="CareOf" required>
                    <label for="CareOf">C/o</label>
                </div>
                <input type="text" class="guardian" id="guardian" name="guardian" autocomplete="guardian" required>
            </div>
            <br><br>
            <div class="SubContainer">
                <label for="MaleGender">Gender:</label>
                <div>
                    <input type="radio" class="Gender" id="MaleGender" name="Gender" value="Male" required>
                    <lable for="MaleGender">Male</lable>
                    <input type="radio" class="Gender" id="FemaleGender" name="Gender" value="Female" required>
                    <lable for="FemaleGender">Female</lable>
                </div>
            </div>
            <br><br>
            <div class="SubContainer">
                <label for="date">Date:</label>
                <input type="date" class="date" id="date" name="date" autocomplete="date" required>
            </div>
            <br><br>
            <div class="SubContainer">
                <label for="roomno">Room no/ Flat no:</label>
                <input type="text" class="roomno" id="roomno" name="roomno" autocomplete="street-address" required>
            </div>
            <br><br>
            <div class="SubContainer">
                <label for="streetname">Street Name:</label>
                <input type="text" class="streetname" id="streetname" name="streetname" autocomplete="street-address"
                    required>
            </div>
            <br><br>
            <div class="SubContainer">
                <label for="VTCofAddress">VTC:</label>
                <input type="text" class="VTCofAddress" id="VTCofAddress" name="VTCofAddress"
                    autocomplete="street-address" required>
            </div>
            <br><br>
            <div class="SubContainer">
                <label for="POofAddress">PO:</label>
                <input type="text" class="POofAddress" id="POofAddress" name="POofAddress" autocomplete="street-address"
                    required>
            </div>
            <br><br>
            <div class="SubContainer">
                <label for="DistrictAddress">District:</label>
                <input type="text" class="DistrictAddress" id="DistrictAddress" name="DistrictAddress"
                    autocomplete="street-address" required>
            </div>
            <br><br>
            <div class="SubContainer">
                <label for="StateAddress">State:</label>
                <input type="text" class="StateAddress" id="StateAddress" name="StateAddress"
                    autocomplete="street-address" required>
            </div>
            <br><br>
            <div class="SubContainer">
                <label for="PINAddress">PIN code:</label>
                <input type="text" class="PINAddress" id="PINAddress" name="PINAddress" autocomplete="street-address"
                    required>
            </div>
            <br><br>
            <div class="SubContainer">
                <label for="phonenumber">Phone:</label>
                <input type="tel" class="phonenumber" id="phonenumber" name="phonenumber" autocomplete="mobile"
                    required>
            </div>
            <br><br>
            <div class="SubContainer">
                <label for="email">Email:</label>
                <input type="email" class="email" id="email" name="email" autocomplete="email" required>
            </div>
            <br><br>
            <div class="SubmitButtonContainer">
                <button class="SubmitButton" onclick="submitButton();">Submit</button>
            </div>
        </form>
    </div>
    `;
});

// Question-08 output
document.getElementById("Question08").addEventListener("click", function () {
    outputContainer.innerHTML = "";
    // below code will be displayed in the outputContainer
    outputContainer.innerHTML = `
    <h2>Question-08, Use the table tag to design given image Click here.</h2>
    <div class="tableContainer">
        <table class="emplyeeDetailstable">
            <caption class="tableTitle">Employee Details</caption>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Employee Type</th>
                <th>Salary</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Bava</td>
                <td>29</td>
                <td>9988776655</td>
                <td>bava@outlook.com</td>
                <td>Salaried</td>
                <td>10,000</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Khan</td>
                <td>30</td>
                <td>8877665544</td>
                <td>khan@guvi.in</td>
                <td>Own Business</td>
                <td>60,000</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Lavish</td>
                <td>35</td>
                <td>9988776651</td>
                <td>lavish@gmail.com</td>
                <td>Salaried</td>
                <td>20,000</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Siva</td>
                <td>23</td>
                <td>8177665544</td>
                <td>siva@outlook.com</td>
                <td>Own Business</td>
                <td>50,000</td>
            </tr>
            <tr>
                <td>5</td>
                <td>John</td>
                <td>25</td>
                <td>9088776655</td>
                <td>john@gmail.com</td>
                <td>Salaried</td>
                <td>30,000</td>
            </tr>
            <tr>
                <td>6</td>
                <td>Thevi</td>
                <td>20</td>
                <td>8877605544</td>
                <td>thevi@gmail.com</td>
                <td>Own Business</td>
                <td>40,000</td>
            </tr>
            <tr>
                <td colspan="5"></td>
                <td>Total</td>
                <td>2,10,000</td>
            </tr>
        </table>
    </div>`;
});

// Question-09 output
document.getElementById("Question09").addEventListener("click", function () {
    outputContainer.innerHTML = "";
    // below code will be displayed in the outputContainer
    outputContainer.innerHTML = `
     <h2>Question-09, Write HTML input tags snippet to show default values for all Form elements.</h2>
    <br>
    <div class="Container">
        <h2>All form elements</h2>
        <form>
            <div class="form-group">
                <label for="text">Text:</label>
                <input type="text" value="Text" id="text" autocomplete="name">
            </div>
            <br>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" value="email@gmail.com" id="email" autocomplete="email">
            </div>
            <br>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" value="Password" id="password" autocomplete="current-password">
            </div>
            <br>
            <div class="form-group">
                <label for="TrueRadio">Radio:</label>
                <div>
                    <input type="radio" name="radio" id="TrueRadio" value="True" checked>
                    <label for="TrueRadio">True</label>
                    <input type="radio" name="radio" id="FalseRadio" value="False">
                    <label for="FalseRadio">False</label>
                </div>
            </div>
            <br>
            <div class="form-group">
                <label for="slot1">Checkbox:</label>
                <div>
                    <input type="checkbox" id="slot1" value="slot1" checked>
                    <label for="slot1">Slot 1</label>
                    <input type="checkbox" id="slot2" value="slot2">
                    <label for="slot2">Slot 2</label>
                </div>
            </div>
            <br>
            <div class="form-group">
                <label for="date">Date:</label>
                <input type="date" value="2021-07-22" id="date" autocomplete="bday">
            </div>
            <br>
            <div class="form-group">
                <label for="time">Time:</label>
                <input type="time" value="13:45" id="time" autocomplete="bday-time">
            </div>
            <br>
            <div class="form-group">
                <label for="number">Number:</label>
                <input type="number" value="10" id="number" autocomplete="number">
            </div>
            <br>
            <div class="form-group">
                <label for="url">URL:</label>
                <input type="url" value="https://www.google.com" id="url" autocomplete="url">
            </div>
            <br>
            <div class="form-group">
                <label for="tel">Tel:</label>
                <input type="tel" value="1234567890" id="tel" autocomplete="tel">
            </div>
            <br>
            <div class="form-group">
                <label for="text">Option:</label>
                <div>
                    <select name="Option">
                        <option id="Option1" name="Option" value="1" selected>Option 1</option>
                        <option id="Option2" name="Option" value="2">Option 2</option>
                        <option id="Option3" name="Option" value="3">Option 3</option>
                    </select>
                </div>
            </div>
            <br>
            <div class="form-group">
                <label for="textarea">Textarea:</label>
                <textarea id="textarea">Textarea</textarea>
            </div>
        </form>
    </div>
    `;
});

// Question-10 output
document.getElementById("Question10").addEventListener("click", function () {
    outputContainer.innerHTML = "";
    // below code will be displayed in the outputContainer
    outputContainer.innerHTML = `
    <div>
        <h2>Question-10, In your, HTML page add the below line and Highlight it without using any CSS.</h2>
        <br>
        <p><mark>HTML & CSS is awesome</mark></p>
    </div>
    `;
});


// Question-11 output
document.getElementById("Question11").addEventListener("click", function () {
    outputContainer.innerHTML = "";
    // below code will be displayed in the outputContainer
    outputContainer.innerHTML = `
    <div>
        <h2>Question-11, Create an HTML page, which should contain all types of input elements.</h2>
        <br>
        <div class="Container">
            <h2>All type of input elements</h2>
                <div class="form-group"> 
                    <label for="text">Text:</label>
                    <input type="text" id="text" autocomplete="name">
                </div>
                <br>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" autocomplete="email">
                </div>
                <br>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" autocomplete="current-password">
                </div>
                <br>
                <div class="form-group">
                    <label for="TrueOption">Radio Button:</label>
                    <div>
                        <input type="radio" id="TrueOption" name="radio" value="True">True
                        <input type="radio" id="FalseOption" name="radio" value="False">False
                    </div>
                </div>
                <br>
                <div class="form-group">
                    <label for="slot1">Checkbox:</label>
                    <div>
                        <input type="checkbox" id="slot1" value="slot1">Slot 1
                        <input type="checkbox" id="slot2" value="slot2">Slot 2
                    </div>
                </div>
                <br>
                <div class="form-group">
                    <label for="date">Date:</label>
                    <input type="date" id="date" autocomplete="bday">
                </div>
                <br>
                <div class="form-group">
                    <label for="time">Time:</label>
                    <input type="time" id="time" autocomplete="bday-time">
                </div>
                <br>
                <div class="form-group">
                    <label for="datetime-local">Datetime-local:</label>
                    <input type="datetime-local" id="datetime-local" autocomplete="bday-time">
                </div>
                <br>
                <div class="form-group">
                    <label for="month">Month:</label>
                    <input type="month" id="month" autocomplete="bday-month">
                </div>
                <br>
                <div class="form-group">
                    <label for="week">Week:</label>
                    <input type="week" id="week" autocomplete="bday-time">
                </div>
                <br>
                <div class="form-group">
                    <label for="datetime">Date time:</label>
                    <input type="datetime" id="datetime">
                </div>
                <br>
                <div class="form-group">
                    <label for="number">Number:</label>
                    <input type="number" id="number" autocomplete="number">
                </div>
                <br>
                <div class="form-group">
                    <label for="url">URL:</label>
                    <input type="url" id="url" autocomplete="url">
                </div>
                <br>
                <div class="form-group">
                    <label for="tel">Tel:</label>
                    <input type="tel" id="tel" autocomplete="tel">
                </div>
                <br>
                <div class="form-group">
                    <label for="option">Option:</label>
                    <div>
                        <select id="option" name="option">
                            <option value="0"></option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                    </div>
                </div>
                <br>
                <div class="form-group">
                    <label for="textarea">Textarea:</label>
                    <textarea id="textarea"></textarea>
                </div>
                <br>
                <div class="form-group">
                    <label for="file">File:</label>
                    <input type="file" id="file">
                </div>
                <br>
                <div class="form-group">
                    <label for="color">Color:</label>
                    <input type="color" id="color">
                </div>
                <br>
                <div class="form-group">
                    <label for="range">Range:</label>
                    <input type="range" id="range">
                </div>
                <br>
                <div class="form-group">
                    <label for="search">Search:</label>
                    <input type="search" id="search">
                </div>
                <br>
                <div class="form-group">
                    <label for="submit">Submit:</label>
                    <input type="submit" id="submit">
                </div>
                <br>
                <div class="form-group">
                    <label for="reset">Reset:</label>
                    <input type="reset" id="reset">
                </div>
                <br>
                <div class="form-group">
                    <label for="button">Button:</label>
                    <input type="button" value="Button" id="button">
                </div>
                <br>
                <div class="form-group">
                    <label for="image">Image:</label>
                    <input type="image" id="image">
                </div>
                <br>
                <div class="form-group">
                    <label for="text">Hidden:</label>
                    <input type="hidden" id="hidden">
                </div>
        </div>
    </div>
    `;
});