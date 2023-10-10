import './App.css';
import logo from "./Logo/easyAppDark.png"



function Center(){
  return(
    <>
      <h1 className='text-center'>Welcome to EasyApp</h1>
    </>
  );
}

function Header({isLoggedIn}){
  if(isLoggedIn){
    return(
      <>
      <div className='px-5 d-flex'>
        <div className='navbar navbar-expand-lg navbar-light'>
            <nav className='pl-3'>
              <a href = "#">
                <img src = {logo} alt = "EasyApp Logo" className='' style={{width: "70px", height: "auto"}}/>
              </a>
            </nav>
        </div>
        <div className='navbar'>
            <nav>
              Settings
            </nav>
            <nav>
              <button>
                Download
              </button>
            </nav>
            <nav>
              <button>
                Log In
              </button>
            </nav>
            <nav>
              <button className='button-primary'>
                Sign up
              </button>
            </nav>
        </div>
      </div>
      </>
    )
  }else{
    return(
      <>
      <div className='px-5 d-flex justify-content-between'>
        <div className='navbar navbar-expand-lg navbar-light'>
            <nav className='pl-3'>
              <a href = "#">
                <img src = {logo} alt = "EasyApp Logo" className='' style={{width: "70px", height: "auto"}}/>
              </a>
            </nav>
        </div>
        <div className='navbar'>
            <nav>
              <button>
                Download
              </button>
            </nav>
            <nav>
              <button type='button' className='btn btn-primary'>
                Log In
              </button>
            </nav>
            <nav>
              <button type = 'button' className='btn btn-secondary'>
                Sign up
              </button>
            </nav>
        </div>
      </div>
      </>
    );
  }
}

function LandingPage() {

  return(
    <>
      <Header isLoggedIn={false}/>
      <Center />
    </>
  );
}
export default LandingPage;
