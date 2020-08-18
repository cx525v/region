import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  dataSource: any[];
  @Input() label: string;

  @Input()
  set items(val: any[]) {
    if (val) {
      this.dataSource = val;
    }
  }

  @Output() itemChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onItemChange(event) {
    this.itemChange.emit(event.value);
  }
}
