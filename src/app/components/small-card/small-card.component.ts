import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  photo:string = ""
  @Input()
  author:string ="Anonymous"
  @Input()
  date:string = ""
  @Input()
  smallTitle:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
