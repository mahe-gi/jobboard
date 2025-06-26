export function Navpage() {
  return (
    <header className=" mx-auto flex justify-between p-4 w-[90%] ">
      <div className="logo">HydJobs</div>
      <div className="menu ">
        <ul className=" flex gap-6">
          <li>Home</li>
          <li>Jobs</li>
          <li>About us</li>
          <li>Community</li>
        </ul>
      </div>
    </header>
  );
}
