import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/pro-duotone-svg-icons';
import { faMinus, faPlus, faTimes } from '@fortawesome/pro-solid-svg-icons';

import Image from '../../../components/dynamic-image/image-container';
import Link from '../../../components/link/text/link';
import Regex from '../common/regex';

import importAll from '../../../utils/import-all';

const images = importAll(require.context('./assets', false, /\.(jpg|webp)$/));

const Scatter = () => (
  <div>
    <h2>Scatter plot</h2>
    <p>
      The interactive viewer for scatter plots visualizes images from the
      {' '}
      <Link
        to="/help/analysis/condition-condition"
        visited={false}
      >
        condition-condition
      </Link>
      {' '}
      and
      {' '}
      <Link
        to="/help/analysis/specificity"
        visited={false}
      >
        specificity
      </Link>
      {' '}
      tools. It supports zooming, panning, searching, point customization
      and analysis of scatter plot images.
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
    <p>
      The plot can be zoomed using the mouse wheel or repositioned by dragging the cursor.
    </p>
    <h3>Settings</h3>
    <p>
      The settings tab allows axes customization and basic filtering of the image.
    </p>
    <figure className="help__image-screenshot">
      <Image
        alt="Interactive scatter plot settings"
        height={487}
        images={images}
        name="scatter-settings"
        width={700}
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
      The
      {' '}
      <span className="help__inner_bold">Filters</span>
      {' '}
      area has inputs for filtering the points to display on the image by axis.
      The filters are inclusive of the value specified.
    </p>
    <h4 id="settings-reset">Reset</h4>
    <p>
      The first reset button will undo any setting changes, as well as zooming and panning, that were made
      after the image was initially loaded. The keyboard shortcut for resetting is
      {' '}
      <span className="help__inner-key-shortcut">Ctrl</span>
      {' '}
      +
      {' '}
      <span className="help__inner-key-shortcut">U</span>
      . The second button will only reset zooming and panning (there is no keyboard shortcut for this).
    </p>
    <h3 id="markup">Markup</h3>
    <p>
      The markup tab contains actions for searching, labelling and adding lines to the image.
    </p>
    <h4 id="markup-search">Search</h4>
    <p>
      The search input allows you to search for point labels. The search is case-insensitive and allows
      partial matches. If at least one match is found, its name will be highlighted next to its point
      on the plot.
    </p>
    <figure className="help__image-screenshot">
      <Image
        alt="Interactive scatter plot searching"
        height={533}
        images={images}
        name="scatter-markup-search"
        width={700}
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
      Lines where x = y or for specific fold change values can be added in this area. Both axes need to be
      on a linear scale or both transformed on a log scale for the lines to display (they would be
      curves otherwise).
    </p>
    <figure className="help__image-screenshot">
      <Image
        alt="Interactive scatter plot lines"
        height={533}
        images={images}
        name="scatter-markup-lines"
        width={700}
      />
      <figcaption>
        <span>Adding lines to a plot</span>
        . Lines where x = y and for fold changes of -10 and 10 have been added to this log-transformed plot.
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
    <h3 id="selections">Selections</h3>
    <p>
      Groups of points can be customized or used for analysis by making a selection. Point labels
      available for selection, and those currently selected, are displayed in the
      {' '}
      <span className="help__inner_bold">Selection</span>
      {' '}
      area on the fourth and fifth tabs of the side panel.
    </p>
    <p>
      There are four ways to select points:
    </p>
    <ol>
      <li>Items can be selected/deselected using the menus in the selection area</li>
      <li>Clicking on a point will select it</li>
      <li>
        Right-clicking on the selection menu will offer the option to paste in a list of names matching the desired
        selection. When pasting a name, the matching algorithm is case insensitive, meaning
        &quot;RAB&quot;, &quot;Rab&quot; and &quot;rab&quot; will be treated the same. Any pasted names not present
        on the image will be discarded. A pasted list can either replace the current selection or be appended
        to it.
      </li>
      <li>
        Holding the SHIFT key and dragging the cursor will create a selection box that captures the points inside it
      </li>
    </ol>
    <figure className="help__image-screenshot">
      <Image
        alt="Interactive scatter plot selections"
        height={534}
        images={images}
        name="scatter-selections"
        width={700}
      />
      <figcaption>
        <span>Making selections</span>
        . Specific points can be selected from the selection menu on the side panel,
        clicking on a point, right-clicking and pasting a list into the selection menu, and by
        holding the SHIFT key and dragging the cursor around the desired points.
      </figcaption>
    </figure>
    <h4 id="selections-customization">Customization</h4>
    <p>
      The colour and size of points can be customized after making a selection. The radius of the points
      (in pixels), the colour and an optional label for the group can be specified from the respective inputs.
      Clicking the &quot;Create group&quot; button will create a group from the selected points.
    </p>
    <figure className="help__image-screenshot">
      <Image
        alt="Interactive scatter plot customizations"
        height={533}
        images={images}
        name="scatter-selections-customization"
        width={700}
      />
      <figcaption>
        <span>Customizing points</span>
        . Selections can be turned into groups with a custom colour, size and label.
      </figcaption>
    </figure>
    <p>
      Multiple groups can be created and they will be automatically added to the legend on the first tab of
      the side panel. After creating a group, its name, colour and the size of points in the group can all
      be adjusted by clicking and editing the appropriate field in the group&apos;s area. The group can be
      deleted via the
      {' '}
      <FontAwesomeIcon icon={faTimes} />
      {' '}
      icon in the upper right. Individual points can be removed by hovering over it and clicking the
      {' '}
      <FontAwesomeIcon icon={faTimes} />
      {' '}
      icon. Points can be moved between groups by dragging and dropping them.
    </p>
    <h4 id="selections-analysis">Analysis</h4>
    <p>
      The
      {' '}
      <span className="help__inner_bold">Analysis</span>
      {' '}
      area on the fifth tab of the side panel can be used to perform analysis on selections.
    </p>
    <figure className="help__image-screenshot">
      <Image
        alt="Interactive scatter plot analysis"
        height={463}
        images={images}
        name="scatter-selections-analysis1"
        width={232}
      />
      <figcaption>
        <span>Analysis area on the side panel</span>
        . Selections can be used for analysis by choosing one of the available analysis types,
        optionally naming the analysis in the case of Gene Ontology enrichment and hitting submit.
      </figcaption>
    </figure>
    <h5>Gene Ontology (GO) enrichment</h5>
    <p>
      GO enrichment analysis of selections can be done provided the labels represent gene names.
      This analysis is done using the API provided by
      {' '}
      <Link to="https://biit.cs.ut.ee/gprofiler/gost">
        g:Profiler
      </Link>
      . The analysis can be given a custom name and a variety of analysis options are provided on the side
      panel.
    </p>
    <p>
      Analysis results will open automatically in a separate tabular view. The image can be returned to from the
      menu in the upper left.
    </p>
    <figure className="help__image-screenshot">
      <Image
        alt="Interactive scatter plot GO enrichment results"
        height={533}
        images={images}
        name="scatter-selections-analysis2"
        width={667}
      />
      <figcaption>
        <span>GO enrichment results</span>
        . Enriched terms for the analysis are sorted based on p-value. Hovering over column headings will display
        the full column name for abbreviations, and hovering over individual cells will display the full cell
        information if it is too long to fit within the available width.
      </figcaption>
    </figure>
    <p>
      Some column names have been abbreviated for space reasons:
    </p>
    <ul className="help__inner-list-heading">
      <li>
        <span>T (term size):</span>
        the number of genes in the source database with the term
      </li>
      <li>
        <span>Q (query size):</span>
        the number of genes in the query selection that have at least one annotation in the source database. Only
        genes with at least one annotation are used for enrichment as genes with no annotations could be missing
        or poorly studied entries that would unnecessarily penalize the results.
      </li>
      <li>
        <span>I (intersection):</span>
        the intersection between T and Q. This is the number of query genes with the term.
      </li>
      <li>
        <span>
          <FontAwesomeIcon icon={faEdit} />
          :
        </span>
        create a custom group from the genes with this enriched term
      </li>
    </ul>
    <p>
      The enrichment results can be exported from the button at the bottom.
    </p>
    <h5>
      R
      <sup>2</sup>
    </h5>
    <p>
      R
      <sup>2</sup>
      {' '}
      analysis can be done on scatter plots by selecting the R-squared option from the selection
      menu. If no points have been selected, the R
      <sup>2</sup>
      {' '}
      will be calculated for all points, otherwise it will only be calculated for selected points.
      Only points that are visible on the plot will be used for this analysis. So if you have applied
      filters to the x- and/or y-axes that have excluded some points from being plotted, those points
      will also be excluded from the R
      <sup>2</sup>
      {' '}
      calculation.
    </p>
    <figure className="help__image-screenshot">
      <Image
        alt="Interactive scatter plot r-squared calculation"
        height={392}
        images={images}
        name="scatter-selections-analysis3"
        width={233}
      />
      <figcaption>
        <span>
          R
          <sup>2</sup>
          {' '}
          calculation
        </span>
        . The R
        <sup>2</sup>
        {' '}
        can be calculated for all visible points or for only a selection of points.
      </figcaption>
    </figure>
    <h3 id="save">Saving</h3>
    <p>
      Both images and interactive sessions can be saved. We also offer semi-permanent or permanent archiving
      for image sharing.
    </p>
    <figure className="help__image-screenshot">
      <Image
        alt="Interactive scatter plot side panel saving tab"
        height={329}
        images={images}
        name="scatter-save"
        width={233}
      />
      <figcaption>
        <span>Saving the image or session</span>
        . The save tab on the side panel provides options for saving images or sessions, and archiving.
      </figcaption>
    </figure>
    <h4 id="save-image">Images</h4>
    <p>
      Images can be saved in SVG format and then further edited in Adobe Illustrator or similar
      vector-based editing software.
    </p>
    <h4 id="save-session">Session</h4>
    <p>
      A session refers to everything you may have done while using the interactive viewer, including reordering,
      filtering, analysis, etc. You can save your complete session to a file and reload it at a later date to
      continue where you left off. Session files are in JSON format (.json)
    </p>
    <h4 id="save-archive">Archive</h4>
    <p>
      By default, analysis tasks and their associated images are only stored for 24 hours. Task results can be
      downloaded and images manually loaded into the interactive viewer at any time however. Alternatively, archiving an
      image allows for it to be stored semi-permanently or permanently on our server. If you choose to archive a file,
      a new link will be created that will be active for three months. If you wish to having it stored permanently,
      you need to first archive the image, then e-mail us at
      {' '}
      <Link to="mailto:contact@prohits-viz.org?Subject=ProHits-viz%20help">
        contact@prohits-viz.org
      </Link>
      {' '}
      with a request for permanent storage. While we make backups of the archive, you
      should always keep a local copy of the archived image as a personal backup.
    </p>
    <p>
      Archiving was designed to support temporary but easy image sharing amongst collaborators, for which
      a link that is active for three months should be sufficient. Permanent storage is meant for images that
      may be associated with a publication or some other permanently public resource. Requests for permanent
      storage should be made sparingly.
    </p>
    <p>
      The full session state is stored when archiving (see the
      {' '}
      <Link
        to="/help/visualization/scatterplot#save-session"
      >
        session
      </Link>
      {' '}
      section directly above), so ensure that the state of the image is how you would like it to appear when the
      archive link is used.
    </p>
  </div>
);

export default Scatter;
