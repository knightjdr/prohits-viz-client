import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/pro-solid-svg-icons';

import Image from '../../../components/dynamic-image/image-container';
import Link from '../../../components/link/text/link';
import Regex from '../common/regex';

import importAll from '../../../utils/import-all';

const images = importAll(require.context('./assets', false, /\.(jpg|webp)$/));

const Scatter = () => (
  <div>
    <h2>Scatter plot</h2>
    <p>
      The interactive viewer for scatter plots supports zooming, panning, searching, point customization
      and analysis.
    </p>
    <figure className="help__image-screenshot">
      <Image
        alt="Interactive scatter plot viewer"
        height={487}
        images={images}
        name="scatter-viewer"
        width={700}
      />
      <figcaption>
        <span>Interactive viewer for scatter plots</span>
        . The image occupies the primary area of the viewer with a side panel on the right
        containing several tabs with actions for interacting with the image. The first tab on the
        side panel displays information about the parameters used for analysis and the legend.
      </figcaption>
    </figure>
    <p>
      The plot can be zoomed using the mouse wheel or repositioned by dragging the cursor.
    </p>
    <p>
      The
      {' '}
      <Link
        to="/help/analysis/specificity"
        visited={false}
      >
        specificity
      </Link>
      {' '}
      tool will generate an image for every condition in the input file analyzed. Switching between the plots can be
      done from the selection menu on the first tab of the side panel.
    </p>
    <h3>Settings</h3>
    <p>
      The settings tab allows customization and basic filtering of the image.
    </p>
    <figure className="help__image-screenshot">
      <Image
        alt="Interactive scatter plot settings"
        height={487}
        images={images}
        name="scatter-settings"
        width={733}
      />
      <figcaption>
        <span>Customizable settings</span>
        . Customize the axes, font size and perform filtering.
      </figcaption>
    </figure>
    <h4 id="settings-image">Image</h4>
    <p>
      From the image area you can log transform axes, either individually or together. If the axes have different
      limits (for example if the y-axis goes to 300 and the x-axis to 200), they can be set to have the same
      upper and lower limits using the &quot;Equal limit axes&quot; toggle.
    </p>
    <p>
      The font size of axes ticks and labels can be set with the &quot;Font size&quot; input. The image can be zoomed
      in or out by clicking the
      {' '}
      <FontAwesomeIcon icon={faPlus} />
      {' '}
      or
      {' '}
      <FontAwesomeIcon icon={faMinus} />
      {' '}
      buttons respectively, with zooming relative to the centre of the plot. The image can also be zoomed with
      the mouse wheel, which is relative to the cursor position.
    </p>
    <h4 id="settings-filtering">Filtering</h4>
    <p>
      The filters area has inputs for filtering the points to display on the image by axis.
      The filters are inclusive of the value specified.
    </p>
    <h4 id="settings-reset">Reset</h4>
    <p>
      The first reset button will undo any setting changes, as well as zooming and panning, that were made
      after the image was initially loaded. The keyboard shortcut for this reset level is SHIFT-R. The second
      button will only reset zooming and panning (there is no keyboard shortcut for this).
    </p>
    <h3 id="markup">Markup</h3>
    <p>
      The markup tab contains actions for searching, labelling and adding lines to the image.
    </p>
    <h4 id="markup-search">Search</h4>
    <p>
      The search input allows you to search for point labels. The search is case-insensitive and allows
      partial matches. If at least one match is found, its name will be highlighted next to its segment
      on the outermost circle.
    </p>
    <figure className="help__image-screenshot">
      <Image
        alt="Interactive scatter plot searching"
        height={533}
        images={images}
        name="scatter-markup-search"
        width={733}
      />
      <figcaption>
        <span>Searching for points</span>
        . Matches to the search query will be highlighted in bold next to their respective point. Labels
        can be viewed by hovering over a point and clicking the point will add a permanent label.
      </figcaption>
    </figure>
    <Regex />
    <h4 id="markup-labels">Labels</h4>
    <p>
      The visibility of all labels is controlled from this area. Labels can also be added individually by
      clicking on a point.
    </p>
    <h4 id="markup-lines">Lines</h4>
    <p>
      Lines where x = y or for fold changes can be added in this area. Both axes need to be
      on a linear scale or both transformed on a log scale for the lines to display (they would be
      curves otherwise).
    </p>
    <figure className="help__image-screenshot">
      <Image
        alt="Interactive scatter plot lines"
        height={533}
        images={images}
        name="scatter-markup-lines"
        width={733}
      />
      <figcaption>
        <span>Adding lines to a plot</span>
        . Lines where x = y and for fold changes of -10 and 10 have been added to this log-
        transformed plot.
      </figcaption>
    </figure>
    <p>
      Any fold change values can be input as a comma-, space- or newline-separated list. You must enter
      both the negative and positive fold changes if you would like both to display. Positive fold
      refers to the x-axis and negative fold to the y-axis.
    </p>
    <p>
      The &quot;Dashed lines&quot; toggle controls whether lines should be dashed or solid, and the
      &quot;Dash length&quot; input controls how long the dashes should be in pixels.
    </p>
  </div>
);

export default Scatter;
