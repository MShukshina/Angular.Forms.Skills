import { Component, OnInit } from '@angular/core';
import {TreeService} from './tree.service';

@Component({
  selector: 'app-tree-files',
  templateUrl: './tree-files.component.html',
  styleUrls: ['./tree-files.component.css']
})
export class TreeFilesComponent implements OnInit {

  public nodes;
  constructor(private treeService: TreeService) { }

  ngOnInit() {
    this.nodes = this.treeService.getNodes();
    console.log(this.nodes);
  }

  selectNode() {

  }
}
