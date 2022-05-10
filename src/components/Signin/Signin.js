import './Signin.css'
const Home= () => {
    return ( 
     <div className="general">
       <div className="div1">
          <div className="first-part">
             <img src="images/logo.png"alt='' />
             <p1>Dont have an account?</p1>
             <p2>sign up!</p2>
          </div>
           <div className="second-part">
              <h1>Welcome</h1>
              <p>Login into your account</p>
          </div>
            
           <div className="third-part">
           <form>
             <div className='email'>
              <input type="email" name="email"placeholder="email" /><br></br>
              </div>
              <input type="password" name="password"placeholder="password"/>
            </form>
           </div>
           <div className='botton'>
               <botton>log in</botton>
           </div>

      </div>
      <div className="div2">
           <img src="images/people.png" alt="" />
         <h1>Quizzy</h1>
         <div className="landing-page">
         <h3>Landing page UI Design</h3>
         </div>
       
         <p>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br></br>
         Quae aut nulla, autem dolores e illum quibusdam  corrupti<br></br>
         nam reiciendis assumenda temporibus dolorum quo vitae!<br></br>
         Expedita deleniti dolorem debitis incidunt.<br></br>
         </p>
         
      </div>
   </div>
        
     );
}
 
export default Home;
