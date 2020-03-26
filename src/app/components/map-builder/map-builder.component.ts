import { Component, ViewEncapsulation, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { NgGridConfig, NgGridItemConfig, NgGridItemEvent } from 'angular2-grid';
import {parse, stringify} from 'flatted/esm';

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
export class MapBuilderComponent implements OnInit, AfterViewInit {
  @ViewChild('mapBuilder') firstChild: ElementRef;

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
        {name: 'door', url: '../../../assets/svg/door.svg'},
        {name: 'double-door', url: '../../../assets/svg/double-door.svg'},
        {name: 'stairs-up', url: '../../../assets/svg/stairs-up.svg'},
        {name: 'trap-door-floor', url: '../../../assets/svg/trap-door-floor.svg'},
        {name: 'elevated-ledge', url: '../../../assets/svg/elevated-ledge.svg'},
        {name: 'false-door', url: '../../../assets/svg/false-door.svg'},
        {name: 'natural-chimney', url: '../../../assets/svg/natural-chimney.svg'},
        {name: 'one-way-door', url: '../../../assets/svg/one-way-door.svg'},
        {name: 'secret-door', url: '../../../assets/svg/secret-door.svg'},
      ]
      this.gridConfig = {
        margins: [2],
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

    ngAfterViewInit() {
      console.log('after view init');
    }

   rotateTile($event){
      const documentElement = $event.target;
      const elementRoot = window.getComputedStyle(documentElement);
      // tslint:disable-next-line:radix
      let rotateDeg = parseInt(elementRoot.getPropertyValue('--turn'))
      rotateDeg = (rotateDeg+90) % 360
      documentElement.style.setProperty('--turn', rotateDeg + 'deg')
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

    dragTile(tile, event) : void {
      // console.log('index', event);
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
      //  console.log('draggin', event, index);
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
      if ( tile === 'door') {
        return { dragHandle: '.handle',  col: 1, row: 3, sizex: 1, sizey: 1 };
      }
      if ( tile === 'double-door') {
        return { dragHandle: '.handle',  col: 1, row: 3, sizex: 1, sizey: 1 };
      }
      if ( tile === 'stairs-up') {
        return { dragHandle: '.handle',  col: 1, row: 3, sizex: 1, sizey: 1 };
      }
      if ( tile === 'trap-door-floor') {
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

    saveDOMState() {
      console.log(this.firstChild.nativeElement);
        if (!sessionStorage)
            return;
        const data = {
            name: 'mappy',
            html: this.firstChild.nativeElement
        };
        localStorage.setItem('dungeon-map',stringify(data));
    };

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
