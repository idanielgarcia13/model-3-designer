import '../App.css';
import '../sections.css';
import SegmentedControl from '../components/SegmentedControl';

const Car = () => {
  return (
    <div className="sections-wrapper">
        <div className="left-section car">
          <div className="selected-specs">
            <div className="spec spec-has-right-separator">
              <span className="spec-value">263mi</span>
              <span className="spec-label">Range (est.)</span>
            </div>
            <div className="spec spec-has-right-separator">
              <span className="spec-value">140mph</span>
              <span className="spec-label">Top Speed</span>
            </div>
            <div className="spec spec-has-right-separator">
              <span className="spec-value">5.3s</span>
              <span className="spec-label">0-60 mph</span>
            </div>
          </div>
        </div>
        <div className="right-section">
          <div className="inner-right">
            <h2>Select Your Car</h2>
            <SegmentedControl LeftOption="Purchase Price" RightOption="Include potential savings*" />
            <p>All cars have a power trunk, glass roof, and Autopilot.</p>

            <h4>Rear-Wheel Drive</h4>
            <div className="option optionSelected">
              <div className="optionName">Standard Range Plus</div>
              <div className="optionPrice">$37,990</div>
            </div>

            <br></br>
            <h4>Dual Motor All-Wheel Drive Drive</h4>
            <div className="option">
              <div className="optionName">Long Range</div>
              <div className="optionPrice">$46,990</div>
            </div>
            <div className="option">
              <div className="optionName">Standard Range Plus</div>
              <div className="optionPrice">$54,990</div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Car;
