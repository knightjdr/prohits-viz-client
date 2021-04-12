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
      these images supports reorganization, searching, filtering and basic analysis.
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
      tool will generate an image for every condition in the input file analyzed. If more than one circular
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
      In the
      {' '}
      <span className="help__inner_bold">Image</span>
      {' '}
      area you can toggle between sorting by the &quot;knownness&quot;
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
      Settings for each circle on the image are controlled from the
      {' '}
      <span className="help__inner_bold">Circle settings</span>
      {' '}
      drag-and-drop area.
      In this area there is a card for each metric visualized on the image. Clicking and dragging a card allows
      reordering of the circles on the image. The minimum value for each metric acts as an inclusive filter. Only
      readouts equal to or above that value will be displayed on the image. The cap is a visual cap on the colour
      scale, with any values at or above being given the highest intensity colour. The visibility of circles
      can be controlled using the &quot;hide&quot; checkbox.
    </p>
    <h4 id="settings-filtering">Filtering</h4>
    <p>
      The filters area has a single input for controlling the number of readouts displayed on the image.
      The first readout is at the top of the circle and counting is in the clockwise direction.
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
    <h3 id="selections">Selections</h3>
    <p>
      Selections are a way to visualize only a part of the image or to define a subset of the data to perform
      analysis on. Readout/segment labels available for selection, and those currently selected, are displayed
      on the fourth tab of the side panel.
    </p>
    <p>
      There are three ways to select readouts:
    </p>
    <ol>
      <li>Items can be selected/deselected using the menus in the selection area</li>
      <li>Clicking on a segment will select the readout</li>
      <li>
        Right-clicking on the selection menu will offer the option to paste in a list of names matching the desired
        selection. When pasting a name, the matching algorithm is case insensitive, meaning
        &quot;RAB&quot;, &quot;Rab&quot; and &quot;rab&quot; will be treated the same. Any pasted names not present
        on the image will be discarded. A pasted list can either replace the current selection or be appended
        to it.
      </li>
    </ol>
    <figure className="help__image-screenshot">
      <Image
        alt="Interactive circular heat map selections"
        height={533}
        images={images}
        name="circheatmap-selections"
        width={733}
      />
      <figcaption>
        <span>Making selections</span>
        . Specific readouts can be selected from the selection menu on the side panel,
        clicking on a segment, and by right-clicking and pasting a list into the selection menu.
      </figcaption>
    </figure>
    <h4 id="selections-snapshot">Manual filtering</h4>
    <p>
      Clicking the &quot;Filter&quot; button after making a selection will display only the selected
      readouts. This filtering can be undone by clicking the &quot;Clear&quot; button
      or
      {' '}
      <Link
        to="/help/visualization/circular-heatmap#settings-reset"
        visited={false}
      >
        resetting
      </Link>
      {' '}
      the image.
    </p>
    <p>
      <strong>Note</strong>
      : the up and down arrows will reorder the selection, but will have no effect on the order
      the readouts are displayed on the image as that is determined by the &quot;knownness&quot; state and
      abundance of the readouts in the outermost circle. However, reordering the selection allows
      you to perform an ordered
      {' '}
      <Link
        to="/help/visualization/circular-heatmap#selections-analysis"
        visited={false}
      >
        analysis
      </Link>
      {' '}
      query.
    </p>
    <h4 id="selections-analysis">Analysis</h4>
    <p>
      The
      {' '}
      <span className="help__inner_bold">Analysis</span>
      {' '}
      area below the selection menus can be used to perform analysis on selections, provided
      the readouts selected represent gene names. Currently, there is only a single type of analysis
      available but we intend on adding more in the future.
    </p>
    <figure className="help__image-screenshot">
      <Image
        alt="Interactive circular heat map analysis"
        height={463}
        images={images}
        name="circheatmap-selections-analysis1"
        width={232}
      />
      <figcaption>
        <span>Analysis area on the side panel</span>
        . Selections representing gene names can be used for analysis by choosing one of the available analysis types,
        optionally naming the analysis and hitting submit.
      </figcaption>
    </figure>
    <h5>Gene Ontology (GO) enrichment</h5>
    <p>
      GO enrichment analysis of selections is done using the API provided by
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
        alt="Interactive circular heat map GO enrichment results"
        height={580}
        images={images}
        name="circheatmap-selections-analysis2"
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
    </ul>
    <p>
      The enrichment results can be exported from the button at the bottom.
    </p>
    <h3 id="save">Saving</h3>
    <p>
      Both images and interactive sessions can be saved. We also offer semi-permanent or permanent archiving
      for image sharing.
    </p>
    <figure className="help__image-screenshot">
      <Image
        alt="Interactive circular heat map side panel saving tab"
        height={329}
        images={images}
        name="circheatmap-save"
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
        to="/help/visualization/circular-heatmap#save-session"
      >
        session
      </Link>
      {' '}
      section directly above), so ensure that the state of the image is how you would like it to appear when the
      archive link is used.
    </p>
  </div>
);

export default CircHeatmap;
