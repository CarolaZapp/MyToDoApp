import "./About.css";
const About = () => {
  return (
    <div>
      <h1 className="headline"> About this ToDo App ... </h1>
      <h2> How to use it:</h2>
      <ol className="about">
        <li className="aboutLi">
          You can create a new ToDo task and choose the deadline date for it
        </li>
        <li className="aboutLi">The task and the deadline date is displayed</li>
        <li className="aboutLi">The tasks can be marked as "done" </li>
        <li className="aboutLi">
          Following the task marked done, it will change the position to "Task
          already done"
        </li>
        <li className="aboutLi">The tasks may also be deleted </li>
        <li className="aboutLi">
          All displayed tasks are stored in the local storage
        </li>
      </ol>
      <h2> How to use the login:</h2>
      <ol className="about">
        <li className="aboutLi">
          To try the login, please use "test" for username and password
        </li>
      </ol>
      <h3> The work on this app is in process! </h3>
    </div>
  );
};

export default About;
