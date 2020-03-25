import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NgGridConfig, NgGridItemConfig, NgGridItemEvent } from 'angular2-grid';
import { nodeListToArray } from '../../utilitiy-functions/nodeListToArray.js';

interface Box {
    config: any;
    name?: string;
    url?: string;
}

interface Tile {
    name: string;
    url: string;
}

@Component({
  selector: 'app-map-builder',
  templateUrl: './map-builder.component.html',
  styleUrls: ['./map-builder.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MapBuilderComponent implements OnInit {
    public boxes: Array<Box> = [];
    public gridConfig: NgGridConfig = {};
    private rgb = '#efefef';
    private curNum;
    private itemPositions: Array<any> = [];
    public tileSet: Array<Tile> = [];
    public isSingleClick = true;
    public rotateAngle = 0;

    constructor() {
        // const dashconf = this._generateDefaultDashConfig();
        // for (let i = 0; i < dashconf.length; i++) {
        //     const conf = dashconf[i];
        //     conf.payload = 1 + i;
        //     this.boxes[i] = { id: i + 1, config: conf };
        // }
        // this.curNum = dashconf.length + 1;
    }

    ngOnInit(){
      this.tileSet = [
        {name: 'hall', url: '../../../assets/svg/hall.svg'},
        {name: 'corner', url: '../../../assets/svg/corner.svg'},
        {name: 'corner-right', url: '../../../assets/svg/corner-right.svg'},
        {name: 'corner-bottom', url: '../../../assets/svg/corner-bottom.svg'},
        {name: 'corner-left', url: '../../../assets/svg/corner-left.svg'},
        {name: 'door', url: '../../../assets/svg/door.svg'},
        {name: 'elevated-ledge', url: '../../../assets/svg/elevated-ledge.svg'},
        {name: 'false-door', url: '../../../assets/svg/false-door.svg'},
        {name: 'natural-chimney', url: '../../../assets/svg/natural-chimney.svg'},
        {name: 'one-way-door', url: '../../../assets/svg/one-way-door.svg'},
        {name: 'secret-door', url: '../../../assets/svg/secret-door.svg'},
      ]
      this.gridConfig = {
        margins: [3],
        draggable: true,
        resizable: false,
        max_cols: 3,
        max_rows: 0,
        visible_cols: 0,
        visible_rows: 0,
        min_cols: 1,
        min_rows: 1,
        col_width: 2,
        row_height: 2,
        cascade: 'none',
        min_width: 25,
        min_height: 25,
        fix_to_grid: true,
        auto_style: true,
        auto_resize: false,
        maintain_ratio: false,
        prefer_new: false,
        zoom_on_drag: false,
        limit_to_screen: true
    };
    }

   rotateTile($event){
      const documentElement = $event.target;
      const elementRoot = window.getComputedStyle(documentElement);
      // tslint:disable-next-line:radix
      let rotateDeg = parseInt(elementRoot.getPropertyValue('--turn'))
      rotateDeg = (rotateDeg+90) % 360
      documentElement.style.setProperty('--turn', rotateDeg + 'deg')
    }

    nodeListToArray(nodeList) {
      return Array.prototype.slice.call(nodeList);
    }

    addTile(tile): void {
      this.isSingleClick = true;
        setTimeout(()=>{
            if(this.isSingleClick){
            this.tileSet.forEach((data) => {
              if (data.name === tile) {
                const type = tile
                const conf: NgGridItemConfig = this._generateDefaultItemConfig(type);
                this.boxes.push({config: conf, name: data.name, url: data.url});
              }
          })
        }
      },250)
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

    private _generateDefaultItemConfig(tile){
      if ( tile === 'hall') {
        return { dragHandle: '.handle', col: 1, row: 1, sizex: 1, sizey: 1 };
      }
      if ( tile === 'corner') {
        return { dragHandle: '.handle',  col: 1, row: 2, sizex: 1, sizey: 1 };
      }
      if ( tile === 'corner-right') {
        return { dragHandle: '.handle',  col: 1, row: 2, sizex: 1, sizey: 1 };
      }
      if ( tile === 'corner-bottom') {
        return { dragHandle: '.handle',  col: 1, row: 2, sizex: 1, sizey: 1 };
      }
      if ( tile === 'corner-left') {
        return { dragHandle: '.handle',  col: 1, row: 2, sizex: 1, sizey: 1 };
      }
      if ( tile === 'door') {
        return { dragHandle: '.handle',  col: 1, row: 3, sizex: 1, sizey: 1 };
      }
      if ( tile === 'elevated-ledge') {
        return { dragHandle: '.handle', col: 1, row: 3, sizex: 1, sizey: 1 };
      }
      if ( tile === 'false-door') {
        return { dragHandle: '.handle',  col: 1, row: 3, sizex: 1, sizey: 1 };
      }
      if ( tile === 'natural-chimney') {
        return { dragHandle: '.handle',  col: 1, row: 3, sizex: 1, sizey: 1 };
      }
      if ( tile === 'one-way-door') {
        return { dragHandle: '.handle',  col: 1, row: 3, sizex: 1, sizey: 1 };
      }
      if ( tile === 'secret-door') {
        return { dragHandle: '.handle',  col: 1, row: 3, sizex: 1, sizey: 1 };
      }
    }

    // private _generateDefaultItemConfig(tile): NgGridItemConfig {
    //   switch(tile){   
    //     case 1: 
    //     tile = 'hall';
    //     return { 'dragHandle': '.handle', 'col': 1, 'row': 1, 'sizex': 1, 'sizey': 1 };
    //     case 2: 
    //     tile = 'corner';
    //     return { 'dragHandle': '.handle', 'col': 1, 'row': 1, 'sizex': 1, 'sizey': 1 };
    //     case 3: 
    //     tile = 'door';
    //     return { 'dragHandle': '.handle', 'col': 1, 'row': 1, 'sizex': 1, 'sizey': 1 };
    //     case 4: 
    //     tile = 'elevated-ledge';
    //     return { 'dragHandle': '.handle', 'col': 1, 'row': 1, 'sizex': 1, 'sizey': 1 };
    //     case 5: 
    //     tile = 'false-door';
    //     return { 'dragHandle': '.handle', 'col': 1, 'row': 1, 'sizex': 1, 'sizey': 1 };
    //     case 6: 
    //     tile = 'natural-chimney';
    //     return { 'dragHandle': '.handle', 'col': 1, 'row': 1, 'sizex': 1, 'sizey': 1 };
    //     case 7: 
    //     tile = 'one-way-door';
    //     return { 'dragHandle': '.handle', 'col': 1, 'row': 1, 'sizex': 1, 'sizey': 1 };
    //     case 7: 
    //     tile = 'secret-door';
    //     return { 'dragHandle': '.handle', 'col': 1, 'row': 1, 'sizex': 1, 'sizey': 1 };     
    //   }
    // }

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
