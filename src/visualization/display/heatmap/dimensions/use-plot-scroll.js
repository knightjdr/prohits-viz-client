import { useDispatch, useSelector } from 'react-redux';

import debounce from '../../../../utils/debounce';
import useScroll from '../../../../hooks/scroll/use-scroll';
import { selectData } from '../../../../state/selector/visualization/data-selector';
import { updatePosition } from '../../../../state/visualization/settings/position-actions';

const Scroll = (ref, wait = 50) => {
  const dispatch = useDispatch();
  const dimensions = useSelector(state => selectData(state, 'dimensions'));
  const position = useSelector(state => selectData(state, 'position'));

  const update = debounce((x, y) => {
    dispatch(updatePosition(x, y));
  }, wait);


  const onScroll = (e) => {
    const horizontal = e.pixelX;
    const normalizedScrollPixels = 40;
    const direction = Math.sign(e.pixelY);
    const cells = Math.max(1, Math.round(Math.abs(e.pixelY / normalizedScrollPixels)));

    const newPosition = {
      x: position.x,
      y: position.y,
    };
    if (horizontal) {
      newPosition.x = position.x + (direction * cells);
      if (newPosition.x < 0) {
        newPosition.x = 0;
      } else if (newPosition.x > dimensions.columns - dimensions.pageX) {
        newPosition.x = dimensions.columns - dimensions.pageX;
      }
    } else {
      newPosition.y = position.y + (direction * cells);
      if (newPosition.y < 0) {
        newPosition.y = 0;
      } else if (newPosition.y > dimensions.rows - dimensions.pageY) {
        newPosition.y = dimensions.rows - dimensions.pageY;
      }
    }

    update(newPosition.x, newPosition.y);
  };

  useScroll(ref, onScroll, 0);
};

export default Scroll;
