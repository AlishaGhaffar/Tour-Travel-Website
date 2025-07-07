import "./SignUpFormStyles.css";

function SignUpForm() {
    return (
    <div className="signup-container">
      <h2>Create Your Account</h2>
      <form className="signup-form">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/login">Login here</a></p>
    </div>
  );
}

export default SignUpForm
