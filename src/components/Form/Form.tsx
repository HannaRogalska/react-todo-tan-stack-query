

const Form = () => {
    
  return (
    <form className="flex gap-1 flex-col items-center w-[450px] border border-solid rounded-lg p-4">
      <label htmlFor="firstName">First Name</label>
      <input id="firstName" />
      <label htmlFor="gender">Gender Selection</label>
      <select
        id="gender"
        className="text-center w-[150px] border border-solid rounded-lg outline-none "
      >
        <option value="female">female</option>
        <option value="male">male</option>
      </select>
      <label htmlFor="yourOpinion">Your Feedback</label>
      <textarea
        id="yourOpinion"
        className="w-[350px] border border-solid rounded-lg outline-none p-2"
      />
      <input type="submit" />
    </form>
  );
}

export default Form
