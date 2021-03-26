import React from 'react';

import Image from '../../../components/dynamic-image/image-container';
import Link from '../../../components/link/text/link';
import Regex from '../common/regex';

import importAll from '../../../utils/import-all';

const images = importAll(require.context('./assets', false, /\.(jpg|webp)$/));

const CircHeatmap = () => (
  <div>
    <h2>Circular heat map</h2>
    <p>
      A circular heat map is a way to visualize several pieces of information about a condition
      and its significant readouts in a compact circular format. The interactive viewer for
      these images supports customization, filtering, reorganization, searching and basic analysis.
    </p>
    <figure className="help__image-screenshot">
      <Image
        alt="Interactive circular heat map viewer"
        height={533}
        images={images}
        name="circheatmap-viewer"
        width={733}
      />
      <figcaption>
        <span>Interactive viewer for circular heat maps</span>
        . The image occupies the primary area of the viewer with a side panel on the right
        containing several tabs with actions for interacting with the image. The first tab on the
        side panel displays information about the parameters used for analysis and the legend.
      </figcaption>
    </figure>
    <p>
      Circular heat maps are always sorted:
    </p>
    <ol>
      <li>Into known and novel readouts (knownness)</li>
      <li>Then by the value of the metric visualized in the outermost circle</li>
    </ol>
    <p>
      The
      {' '}
      <Link
        to="/help/analysis/scv"
        visited={false}
      >
        SCV
      </Link>
      {' '}
      tool will generate an image for every condition in the input file analyzed. If there more than one circular
      heat map is produced, switching between them can be done from the selection menu on the first tab
      of the side panel.
    </p>
    <h3>Settings</h3>
    <p>
      The settings tab allows customization, reorganization and basic filtering of the image.
    </p>
    <figure className="help__image-screenshot">
      <Image
        alt="Interactive circular heat map settings"
        height={533}
        images={images}
        name="circheatmap-settings"
        width={733}
      />
      <figcaption>
        <span>Customizable settings</span>
        . Customize the image appearance and organization, and perform filtering.
      </figcaption>
    </figure>
    <h4 id="settings-image">Image</h4>
    <p>
      In the &quot;Image&quot; area you can toggle between sorting by the &quot;knownness&quot;
      property if this option was selected during analysis. Readouts will be sorted first by whether
      they are known or not for the condition being visualized and then by the value of the metric
      visualized in the outermost circle if this option is enabled.
    </p>
    <p>
      The thickness of the circles is automatically determined by the size of the browser window and
      an optimal default size. The size can be adjusted from the &quot;Circle thickness&quot;
      input.
    </p>
    <p>
      Settings for each circle on the image are controlled from the &quot;Circle settings&quot; drag-and-drop area.
      In this area there is a card for each metric visualized on the image. Clicking and dragging a card allows
      reordering of the circles on the image. The minimum value for each metric acts as an inclusive filter. Only
      readouts equal to or above that value will be displayed on the image. The cap is a visual cap on the colour
      scale, with any values at or above being given the highest intensity colour. The visibility of circles
      can be controlled using the &quot;Hide&quot; checkbox.
    </p>
    <h4 id="settings-filtering">Filtering</h4>
    <p>
      The &quot;Filters&quot; area has a single input for controlling the number of readouts displayed on the image.
    </p>
    <h4 id="settings-reset">Reset</h4>
    <p>
      Resetting the image will undo any setting changes that were made after the image was
      initially loaded. The keyboard shortcut for resetting is SHIFT-R.
    </p>
    <h3 id="markup">Markup</h3>
    <p>
      The markup tab contains actions for searching and labelling the image.
    </p>
    <h4 id="markup-search">Search</h4>
    <p>
      The search input allows you to search for readout labels. The search is case-insensitive and allows
      partial matches. If at least one match is found, its name will be highlighted next to its segment
      on the outermost circle.
    </p>
    <figure className="help__image-screenshot">
      <Image
        alt="Interactive circular heat map searching"
        height={533}
        images={images}
        name="circheatmap-markup-search"
        width={733}
      />
      <figcaption>
        <span>Searching for readouts</span>
        . Matches to the search query will be highlighted in bold next to their respective segment. Labels
        can be viewed by hovering over a segment and clicking the segment will add a permanent label.
      </figcaption>
    </figure>
    <Regex />
    <h4 id="markup-labels">Labels</h4>
    <p>
      The visibility of all labels is controlled from this area. Labels can also be added individually by
      clicking on a segment of the circle.
    </p>
  </div>
);

export default CircHeatmap;
