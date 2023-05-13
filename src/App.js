//Import CSS File
import './App.css';

function App() {

  return (
    //Main App
    <div className="App">
      {/* header */}
      <div className='header'>
          <h1 className='animated-text'>Login From</h1><br/><br/>
      </div>
      <div className='request'>
        Please Login to our Application<br/><br/><br/><br/>
      </div>

      {/* Form */}
      <div className='Form'>
        
          <form>
            {/* Email */}
            <div className='E-Mail'>
              <font className='Email-text'>Email: &nbsp;&nbsp;&nbsp;&nbsp;</font> <input type='email' className='Email-input'/>
            </div>

            {/* Password */}
            <div className='Password'>    
              Password: <input type='password' size='80px' className='password-input' id="password"/>
            </div>
            {/* Submit Button     */}
            <div className='Submit-Button'>
              <input type='submit' value='Login' className='Submit-button'/>

            </div>

            {/* Reset-Button */}

            <div className='Reset-Button'>
              <input type='reset' value='Reset' className='Reset-button'/>

            </div>  

          </form>

      </div>
      <br/><br/><br/><br/><br/><br/>
    </div>
  );
}
export default App;

//Javascript

function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var toggleButton = document.getElementById("toggleButton");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleButton.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    toggleButton.textContent = "Show";
  }
}