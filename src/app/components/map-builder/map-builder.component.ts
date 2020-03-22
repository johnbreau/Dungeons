import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';

import {CompactType, DisplayGrid, Draggable, GridsterConfig, GridsterItem, GridType, PushDirections, Resizable} from 'angular-gridster2';

interface Safe extends GridsterConfig {
  draggable: Draggable;
  resizable: Resizable;
  pushDirections: PushDirections;
}

@Component({
  selector: 'app-map-builder',
  templateUrl: './map-builder.component.html',
  styleUrls: ['./map-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class MapBuilderComponent implements OnInit {
  options: Safe;
  dashboard: Array<GridsterItem>;

  ngOnInit() {
    this.options = {
      draggable: {
        enabled: true,
      },
      resizable: {
        enabled: false,
      },
      pushDirections: {north: true, east: true, south: true, west: true},
      margin: 2,
      // outerMargin: true,
      // outerMarginTop: null,
      // outerMarginRight: null,
      // outerMarginBottom: null,
      // outerMarginLeft: null,
      // useTransformPositioning: true,
      // mobileBreakpoint: 640,
      // minCols: 1,
      // maxCols: 200,
      // minRows: 1,
      // maxRows: 200,
      // maxItemCols: 200,
      // minItemCols: 1,
      // maxItemRows: 200,
      // minItemRows: 1,
      // maxItemArea: 2500,
      // minItemArea: 1,
      // defaultItemCols: 1,
      // defaultItemRows: 1,
      // fixedColWidth: 105,
      // fixedRowHeight: 105,
      // keepFixedHeightInMobile: false,
      // keepFixedWidthInMobile: false,
      // scrollSensitivity: 10,
      // scrollSpeed: 20,
      // enableEmptyCellClick: false,
      // enableEmptyCellContextMenu: false,
      // enableEmptyCellDrop: false,
      // enableEmptyCellDrag: false,
      // enableOccupiedCellDrop: false,
      // emptyCellDragMaxCols: 50,
      // emptyCellDragMaxRows: 50,
      // ignoreMarginInRow: false,
      // draggable: {
      //   enabled: true,
      // },
      // resizable: {
      //   enabled: true,
      // },
      // swap: false,
      // pushItems: true,
      // disablePushOnDrag: false,
      // disablePushOnResize: false,
      // pushDirections: {north: true, east: true, south: true, west: true},
      // pushResizeItems: false,
      // displayGrid: DisplayGrid.Always,
      // disableWindowResize: false,
      // disableWarnings: false,
      // scrollToNewItems: false
    };

    this.dashboard = [
      {cols: 1, rows: 1, y: 0, x: 0, hasContent: true, url: 'submerged-path.png'},
      {cols: 1, rows: 1, y: 0, x: 0, hasContent: true},
      {cols: 1, rows: 1, y: 0, x: 0, hasContent: true},
      {cols: 1, rows: 1, y: 0, x: 0, hasContent: true},
      {cols: 1, rows: 1, y: 0, x: 0, hasContent: true},
      {cols: 1, rows: 1, y: 0, x: 0, hasContent: true},
      {cols: 1, rows: 1, y: 0, x: 0, hasContent: true},
      {cols: 1, rows: 1, y: 0, x: 0, hasContent: true},
      {cols: 1, rows: 1, y: 0, x: 0, hasContent: true},
      {cols: 1, rows: 1, y: 0, x: 0, hasContent: true},
      {cols: 1, rows: 1, y: 0, x: 0, hasContent: true}
    ];
  }

  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({x: 0, y: 0, cols: 1, rows: 1});
  }
}
