import { FaBars } from 'react-icons/fa';

const ToggleButton = ({ handleClick }) => {
  return <div>
    <button className='toggle-btn' onClick={handleClick}>
      <FaBars />
    </button>
  </div>
}
export default ToggleButton;