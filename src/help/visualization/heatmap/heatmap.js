import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowsAlt,
  faEyeSlash,
  faLink,
  faSync,
  faToggleOn,
} from '@fortawesome/pro-duotone-svg-icons';

import Image from '../../../components/dynamic-image/image-container';
import { ReactComponent as ResizeIcon } from './assets/resize.svg';

import importAll from '../../../utils/import-all';

const images = importAll(require.context('./assets', false, /\.(jpg|webp)$/));

const Heatmap = () => (
  <div>
    <h2>Heat map/dot plot</h2>
    <p>
      The interactive viewer for heat maps and dot plots allows you to navigate, search, sort, reorganize,
      customize and annotate images, as well as perform basic analysis. In depth video tutorials will be
      available soon to accompany this documentation.
    </p>
    <figure className="help__image-screen">
      <Image
        alt="Interactive heat map and dot plot viewer"
        height={580}
        images={images}
        name="heatmap-viewer"
        width={667}
      />
      <figcaption>
        <span>Interactive viewer for heat maps and dot plots</span>
        . The image occupies the primary area of the viewer with a side panel on the right
        containing several tabs with actions for interacting with the image. The first tab on the
        side panel displays information about the parameters used for analysis and the legend.
      </figcaption>
    </figure>
    <h3 id="navigation">Navigation</h3>
    <p>
      The viewer is designed to display images at a size large enough to make it easy to see details
      such as column and row labels. Generally this will result in only a part of the image being displayed
      on the screen. Different areas can be selected for viewing by clicking on the minimap found in the
      second tab of the side panel. The arrows at the side of the image can be used for moving the image in
      precise increments. The mouse wheel can also be used to scroll through the image, although this will
      work poorly if you have a device
      with inertial scrolling, such as a track pad, magic mouse or touch device. Holding the shift key while
      scrolling will cause the image to scroll in the horizontal direction if the image is wider than the
      width of the browser window.
    </p>
    <figure className="help__image-screen">
      <Image
        alt="Interactive heat map and dot plot navigation"
        height={580}
        images={images}
        name="heatmap-navigation-1"
        width={667}
      />
      <figcaption>
        <span>Navigation on heat maps and dot plots</span>
        . The minimap on the side panel displays the full image in miniature, with the currently visible
        portion indicated by the dashed black box. Clicking anywhere on the minimap will move the image to
        that position. The arrows at the bottom right of the image can be used for precise navigation. The top
        and bottom arrows will move to the start or end of the image respectively, the next innermost arrows will move
        back or forward a screen at a time, and the innermost arrows will move up or down one row at a time.
      </figcaption>
    </figure>
    <h4>Sorting</h4>
    <p>
      Images can be sorted by row by right-clicking on a column name and selected the desired option
      (ascending/descending). One column can be sorted relative to another, i.e. a fold-change sort,
      by right clicking on one column and setting it as a reference, and then clicking on a second
      column and sorting relative to the first.
    </p>
    <h4 id="minimap">Minimap</h4>
    <p>
      The minimap on the side panel displays the full image in miniature, with the currently visible
      portion indicated by the dashed black box. Clicking anywhere on the minimap will move the image to
      that position.
    </p>
    <p>
      Sorting an image will cause the minimap to disappear as it no longer corresponds to the current image
      state. A minimap matching the current image state is not automatically generated as this can be
      time-consuming (several seconds) if the image is large. When the minimap is not available, a button
      will be present that allows a new minimap to be created if desired.
    </p>
    <p>
      The
      {' '}
      <FontAwesomeIcon icon={faSync} />
      {' '}
      icon on the top right of the minimap can be used to force the minimap to update to match changes in certain
      image settings. For efficiency&apos;s sake, the minimap will not automatically update when settings
      such as the image colour scale are changed as they do not affect the image layout.
    </p>
    <p>
      The
      {' '}
      <FontAwesomeIcon icon={faLink} />
      {' '}
      icon can be used to detach the minimap from the side panel. This allows the minimap to be open at the same
      time as other tabs on the side panel.
    </p>
    <figure className="help__image-screen">
      <Image
        alt="Interactive heat map and dot plot navigation with detached minimap"
        height={580}
        images={images}
        name="heatmap-navigation-2"
        width={773}
      />
      <figcaption>
        <span>Detached minimap open alongside the information tab</span>
        . The minimap was detached from the side panel using the
        {' '}
        <FontAwesomeIcon icon={faLink} />
        {' '}
        icon. The new detached minimap has additional icons for moving
        {' '}
        (
        <FontAwesomeIcon icon={faArrowsAlt} />
        , top right)
        {' '}
        and resizing
        {' '}
        (
        <span className="help__inner-resize-icon-wrapper">
          <ResizeIcon />
        </span>
        , bottom left) the detached panel. The
        {' '}
        <FontAwesomeIcon icon={faEyeSlash} />
        {' '}
        icon allows you to manually hide the minimap panel while it is detached. Clicking the
        {' '}
        <FontAwesomeIcon icon={faToggleOn} />
        {' '}
        icon allows you to control the panel&apos;s opacity with the cursor position. If
        this setting is toggled off, moving the cursor outside the panel will cause it to disappear,
        while moving it back over the area will cause it to reappear. This was designed for
        situations where a very large image is displayed that occupies the entire browser
        window. A detached minimap will overlap such a large image, but moving the cursor outside and
        then back over the minimap will cause the panel to disappear and then reappear, making it easy to see the
        image as a whole while still having easy access to the minimap for navigation.
      </figcaption>
    </figure>
    <h3>Settings</h3>
    <p>a</p>
    <h4 id="reset">Reset</h4>
    <p>
      Images can be reset by pressing CMD/⌘-R on a Mac or Ctrl-R on Linux/Windows.
    </p>
  </div>
);

export default Heatmap;
