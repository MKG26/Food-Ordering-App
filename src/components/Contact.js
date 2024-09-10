const Contact = () => (
  <>
    <h1 className="font-bold text-2xl m-6">Contact Us</h1>

    <form className="m-6">
      <input
        className="border-2 p-2 mr-5 w-[300px]"
        type="text"
        placeholder="Name"
      />
      <input
        className="border-2 p-2 mr-5 w-[300px]"
        type="email"
        placeholder="Email"
      />
    </form>

    <button className="ml-[570px] border-2 bg-red-300 p-2 rounded-lg font-bold text-gray-700">
      Submit
    </button>
  </>
);

export default Contact;
