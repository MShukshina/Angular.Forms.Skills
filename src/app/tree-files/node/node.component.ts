import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {

  @Input() nodes;
  constructor() { }

  ngOnInit() {
  }

  explandItem(id: string) {
    const node = document.getElementById('nd-' + id).style
    const button = document.getElementById('bt-' + id)

    if (node.display === 'none') {
        button.innerHTML = '+'
        node.display = 'inline';
     } else {
        button.innerHTML = '-'
        node.display = 'none';
     }
   }
}
