import '../App.css';
import '../sections.css';

const Car = () => {
  return (
    <div className="sections-wrapper">
        <div className="left-section">
          <h2>Hello world!</h2>
        </div>
        <div className="right-section">
          <div className="inner-right">
            <h2>Select Your Car</h2>
            <p>All cars have a power trunk, glass roof, and Autopilot.</p>
          </div>
        </div>
    </div>
  );
};

export default Car;
