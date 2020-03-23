import { Component, ViewEncapsulation } from '@angular/core';
import { NgGridConfig, NgGridItemConfig, NgGridItemEvent } from 'angular2-grid';

interface Box {
    id: number;
    config: any;
    name?: string;
}

@Component({
  selector: 'app-map-builder',
  templateUrl: './map-builder.component.html',
  styleUrls: ['./map-builder.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MapBuilderComponent {
    public boxes: Array<Box> = [];
    public gridConfig: NgGridConfig = <NgGridConfig>{
        'margins': [5],
        'draggable': true,
        'resizable': false,
        'max_cols': 3,
        'max_rows': 0,
        'visible_cols': 0,
        'visible_rows': 0,
        'min_cols': 1,
        'min_rows': 1,
        'col_width': 2,
        'row_height': 2,
        'cascade': 'none',
        'min_width': 25,
        'min_height': 25,
        'fix_to_grid': true,
        'auto_style': true,
        'auto_resize': false,
        'maintain_ratio': false,
        'prefer_new': false,
        'zoom_on_drag': false,
        'limit_to_screen': true
    };
    private rgb = '#efefef';
    private curNum;
    private itemPositions: Array<any> = [];

    constructor() {
        // const dashconf = this._generateDefaultDashConfig();
        // for (let i = 0; i < dashconf.length; i++) {
        //     const conf = dashconf[i];
        //     conf.payload = 1 + i;
        //     this.boxes[i] = { id: i + 1, config: conf };
        // }
        // this.curNum = dashconf.length + 1;
    }

    addRedBox(): void {
        const type = 'red';
        const conf: NgGridItemConfig = this._generateDefaultItemConfig(type);
        conf.payload = this.curNum++;
        this.boxes.push({ id: conf.payload, config: conf, name: 'Red' });
    }

    addBlueBox(): void {
        const type = 'blue';
        const conf: NgGridItemConfig = this._generateDefaultItemConfig(type);
        conf.payload = this.curNum++;
        this.boxes.push({ id: conf.payload, config: conf, name: 'Blue'});
    }

    addGreenBox(): void {
        const type = 'green';
        const conf: NgGridItemConfig = this._generateDefaultItemConfig(type);
        conf.payload = this.curNum++;
        this.boxes.push({ id: conf.payload, config: conf, name: 'Green' });
    }

    removeWidget(index: number): void {
        if (this.boxes[index]) {
            this.boxes.splice(index, 1);
        }
    }

    updateItem(index: number, event: NgGridItemEvent): void {
        // Do something here
    }

    onDrag(index: number, event: NgGridItemEvent): void {
        // Do something here
    }

    onResize(index: number, event: NgGridItemEvent): void {
        // Do something here
    }

    private _generateDefaultItemConfig(type): NgGridItemConfig {
      if( type === 'red') {
        return { 'dragHandle': '.handle', 'col': 1, 'row': 1, 'sizex': 1, 'sizey': 1 };
      }
      if( type === 'blue') {
        return { 'dragHandle': '.handle', 'col': 1, 'row': 2, 'sizex': 1, 'sizey': 1 };
      }
      if( type === 'green') {
        return { 'dragHandle': '.handle', 'col': 1, 'row': 3, 'sizex': 1, 'sizey': 1 };
      }
    }

  //   private _generateDefaultDashConfig(): NgGridItemConfig[] {
  //     return [
  //     { 'dragHandle': '.handle', 'col': 1, 'row': 1, 'sizex': 1, 'sizey': 1 },
  //     { 'dragHandle': '.handle', 'col': 1, 'row': 2, 'sizex': 1, 'sizey': 1 },
  //     { 'dragHandle': '.handle', 'col': 1, 'row': 3, 'sizex': 1, 'sizey': 1 },
  //     { 'dragHandle': '.handle', 'col': 1, 'row': 4, 'sizex': 1, 'sizey': 1 },
  //     { 'dragHandle': '.handle', 'col': 51, 'row': 5, 'sizex': 1, 'sizey': 1 },
  //     { 'dragHandle': '.handle', 'col': 26, 'row': 1, 'sizex': 1, 'sizey': 1 }];
  // }
}