import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  private isExtended = false;

  @Input() isExtendable = this.isExtended;
  @Output() onCardExtend = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onExtend() {
    this.isExtended = !this.isExtended;
    this.onCardExtend.emit();
  }
}
