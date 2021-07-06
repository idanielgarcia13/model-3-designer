import '../App.css';
import '../components.css';

// Segmented Controls only support two values at the moment.

const SegmentedControl = (props) => {
  return (
    <div className="segmented-control-container">
        <input type="radio" value="purchase-price" name="segctrl" id="price-type1" />
        <label for="price-type1">{props.LeftOption}</label>

        <input type="radio" value="purchase-price" name="segctrl" id="price-type2" checked={true} />
        <label for="price-type2">{props.RightOption}</label>
    </div>
  );
};

export default SegmentedControl;
