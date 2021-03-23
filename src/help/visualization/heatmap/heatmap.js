import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowsAlt,
  faEyeSlash,
  faLink,
  faSync,
  faToggleOn,
} from '@fortawesome/pro-duotone-svg-icons';

import Link from '../../../components/link/text/link';
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
    <figure className="help__image-screenshot">
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
    <figure className="help__image-screenshot">
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
    <h4 id="sorting">Sorting</h4>
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
    <figure className="help__image-screenshot">
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
    <p>
      The settings tab allows customization of the image appearance and provides inputs for
      filtering the image.
    </p>
    <figure className="help__image-screenshot">
      <Image
        alt="Interactive heat map and dot plot settings"
        height={580}
        images={images}
        name="heatmap-settings"
        width={667}
      />
      <figcaption>
        <span>Customizable settings</span>
        . Change the image type (heat map/dot plot), colours and perform filtering.
      </figcaption>
    </figure>
    <h4 id="settings-image">Image</h4>
    <p>
      From this area, basic settings about the image appearance can be adjusted. The image type can be swapped
      between the heat map and dot plot types. Dot plots are only suitable when each condition-readout pair (a
      circle or cell on the image) has
      an associated score. If this is missing, the same score will be assumed for all cells on the image.
    </p>
    <p>
      The cell
      size (in pixels) can be adjusted. A smaller size will allow more of the image on to the screen at one time.
      This will cause the font size of the column and row labels to shrink and can slow down the viewer as more
      of the image must be drawn whenever changes are made to its appearance, for example when navigating, sorting
      or changing settings.
    </p>
    <p>
      The &quot;Reset ratios&quot; toggle is only visible on dot plot images. It is used for controlling whether
      or not the relative circle size across conditions should be adjusted when subsets of the image are selected
      (more on
      {' '}
      <Link
        to="/help/visualization/heatmap#selections"
        visited={false}
      >
        selections
      </Link>
      {' '}
      below). The circle size on the original image is relative to all conditions, i.e. the condition with the
      highest abundance will have the maximum circle size and all other values are relative to that. If you select
      a subset of the image to view, that maximum condition may not be present. By toggling this setting to
      &quot;on&quot;, the viewer will determine if a new maximum condition is needed and reset the circle ratios
      across conditions accordingly.
    </p>
    <p>
      Clicking the &quot;Fix plot&quot; toggle will fix the plot to the left side of the browser window when it
      does not occupy the full width of the screen. By default it is centered. It can be useful to fix the plot
      to the left when you want to detach the minimap and have it open at the same time as another tab on the side
      panel, as this can yield sufficient space for everything to be visible side-by-side.
    </p>
    <h4 id="settings-colour">Colour</h4>
    <p>
      The fill colour and edge colour on dot plots can be adjusted from this area of the settings panel. The
      fill colour scale can also be inverted if desired. In the future we would like to add the ability to create custom
      colour scales.
    </p>
    <h4 id="settings-filtering">Filtering</h4>
    <p>
      The readouts displayed on the image are determined by the &quot;Minimum abundance&quot; filter, and also by
      the &quot;Primary filter&quot; for data coming from the dot plot analysis tool. By default if a readout passes
      these filters for one condition, it will appear on the image.
    </p>
    <p>
      These filters can be adjusted in the corresponding area of the settings tab. However, the range of values they
      can take is limited by the settings used for analysis, to the extent that readouts passing
      filters less stringent than those initial settings cannot be added back onto the image.
      For example, if a minimum abundance filter of 10 was set when the analysis was performed, readouts that did
      not pass this cutoff were excluded from the image. If you were to change this filter
      to 9 on the side panel, readouts passing this less stringent filter would not be added to the image as they
      are not present in the available image data. The analysis would have to be repeated with this new cutoff
      to parse these readouts from the file the analysis was performed on.
    </p>
    <p>
      The &quot;Abundance cap&quot; and &quot;Secondary filter&quot; are not used for filtering data.
      The abundance cap sets the upper limit for the fill colour scale and the secondary filter
      defines the intermediate intensity edge on dot plots. These can still be adjusted and the changes will
      be reflected in the colouring on the image and on the legend.
    </p>
    <p>
      The &quot;Filter by&quot; dropdown menu allows you to restrict filtering to a subset of conditions. If
      conditions are selected here, only readouts passing the filtering criteria for at least one of those
      conditions will be included on the image. Combining filtering with
      {' '}
      <Link
        to="/help/visualization/heatmap#sorting"
        visited={false}
      >
        sorting
      </Link>
      {' '}
      is a powerful way of creating ordered images displaying a precisely defined set of readouts.
    </p>
    <p>
      When making a
      {' '}
      <Link
        to="/help/visualization/heatmap#selections"
        visited={false}
      >
        selection
      </Link>
      {' '}
      on a subset of data, there may often be rows or columns where nothing passes the specified filters,
      for example when an area of the image on a dot plot is selected that contains a readout but not the
      single condition it was found to be significant in.
      You can use the &quot;Clear failing columns&quot; and &quot;Clear failing rows&quot; toggles to
      tell the viewer to exclude these when a new image is created from the selection. By default
      rows with no readouts passing the filters will be excluded, but columns will be left in place.
    </p>
    <figure>
      <Image
        alt="Interactive heat map and dot plot selection filtering"
        height={580}
        images={images}
        name="heatmap-selections-filtering-options"
        width={889}
      />
      <figcaption>
        <span>Excluding data when making a selection</span>
        . a.
      </figcaption>
    </figure>
    <h4 id="settings-reset">Reset</h4>
    <p>
      Resetting the image will undo any sorting, filtering and setting changes that were made after the image was
      initially loaded. The keyboard shortcut for resetting is SHIFT-R.
    </p>
    <h3 id="selections">Selections</h3>
    <p>a</p>
  </div>
);

export default Heatmap;
